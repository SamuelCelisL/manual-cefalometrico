<template>
  <div ref="container" class="skull-viewer">
    <canvas ref="canvas"></canvas>

    <div v-if="loading" class="loading">Cargando cráneo...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// --------------------------------------------------
// Referencias DOM
// --------------------------------------------------

const container = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)

// --------------------------------------------------
// Estado
// --------------------------------------------------

const loading = ref<boolean>(true)
const error = ref<string>('')

// --------------------------------------------------
// Variables Three.js
// --------------------------------------------------

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let skull: THREE.Group | null = null

let animationFrame: number | null = null

// --------------------------------------------------
// CONTROL DE ROTACIÓN
// --------------------------------------------------

let isDragging = false

let previousX = 0
let previousY = 0

const rotationSpeed = 0.005
const rotationLimit = 0.45

// --------------------------------------------------
// INICIALIZAR THREE.JS
// --------------------------------------------------

function init(): void {
  if (!container.value || !canvas.value) {
    return
  }

  // -----------------------------------------------
  // Renderer
  // -----------------------------------------------

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  renderer.setSize(container.value.clientWidth, container.value.clientHeight)

  // -----------------------------------------------
  // Escena
  // -----------------------------------------------

  scene = new THREE.Scene()

  scene.background = new THREE.Color(0x12181c)

  // -----------------------------------------------
  // Cámara
  // -----------------------------------------------

  camera = new THREE.PerspectiveCamera(
    40,
    container.value.clientWidth / container.value.clientHeight,
    0.01,
    1000,
  )

  camera.position.set(0, 0, 5)

  // -----------------------------------------------
  // Luces
  // -----------------------------------------------

  const ambientLight = new THREE.AmbientLight(0xffffff, 1)

  scene.add(ambientLight)

  const keyLight = new THREE.DirectionalLight(0xffffff, 2)

  keyLight.position.set(3, 5, 5)

  scene.add(keyLight)

  const fillLight = new THREE.DirectionalLight(0x88aaff, 1)

  fillLight.position.set(-3, 2, -4)

  scene.add(fillLight)

  // -----------------------------------------------
  // Cargar modelo
  // -----------------------------------------------

  cargarModelo()
  setupControls()

  // -----------------------------------------------
  // Resize
  // -----------------------------------------------

  window.addEventListener('resize', resize)

  // --------------------------------------------------
  // CONTROLES DEL MODELO
  // --------------------------------------------------

  function setupControls(): void {
    if (!canvas.value) {
      return
    }

    canvas.value.addEventListener('pointerdown', onPointerDown)

    canvas.value.addEventListener('pointermove', onPointerMove)

    canvas.value.addEventListener('pointerup', onPointerUp)

    canvas.value.addEventListener('pointercancel', onPointerUp)

    canvas.value.addEventListener('pointerleave', onPointerUp)
  }

  // -----------------------------------------------
  // Animación
  // -----------------------------------------------

  animate()
}

// --------------------------------------------------
// CARGAR MODELO GLB
// --------------------------------------------------

function cargarModelo(): void {
  if (!scene || !camera) {
    return
  }

  const currentScene = scene
  const currentCamera = camera

  const loader = new GLTFLoader()

  loader.load(
    '/models/human_skull.glb',

    // ---------------------------------------------
    // Modelo cargado
    // ---------------------------------------------

    (gltf) => {
      console.log('GLB cargado correctamente')
      console.log('GLTF:', gltf)

      skull = gltf.scene

      currentScene?.add(skull)

      // -------------------------------------------
      // Mostrar estructura del GLB
      // -------------------------------------------

      skull.traverse((object: THREE.Object3D) => {
        console.log('Objeto:', object.name, '| Tipo:', object.type)
      })

      // -------------------------------------------
      // Transformación inicial
      // -------------------------------------------

      skull.position.set(0, 0, 0)

      skull.rotation.set(0, 0, 0)

      skull.scale.set(1, 1, 1)

      // -------------------------------------------
      // Calcular bounding box
      // -------------------------------------------

      const box = new THREE.Box3().setFromObject(skull)

      const center = new THREE.Vector3()

      box.getCenter(center)

      // -------------------------------------------
      // Centrar modelo
      // -------------------------------------------

      skull.position.sub(center)

      // -------------------------------------------
      // Obtener dimensiones
      // -------------------------------------------

      const size = new THREE.Vector3()

      box.getSize(size)

      const maxDimension = Math.max(size.x, size.y, size.z)

      // -------------------------------------------
      // Posicionar cámara
      // -------------------------------------------

      currentCamera.position.set(0, 0, maxDimension * 2.5)

      currentCamera.lookAt(0, 0, 0)

      loading.value = false
    },

    // ---------------------------------------------
    // Progreso
    // ---------------------------------------------

    (progress) => {
      if (progress.total > 0) {
        const percentage = (progress.loaded / progress.total) * 100

        console.log(`Cargando: ${percentage.toFixed(1)}%`)
      }
    },

    // ---------------------------------------------
    // Error
    // ---------------------------------------------

    (err) => {
      console.error('Error cargando GLB:', err)

      error.value = 'No se pudo cargar el modelo 3D.'

      loading.value = false
    },
  )
}

// --------------------------------------------------
// ANIMACIÓN
// --------------------------------------------------

function animate(): void {
  animationFrame = requestAnimationFrame(animate)

  if (!renderer || !scene || !camera) {
    return
  }

  renderer.render(scene, camera)
}

// --------------------------------------------------
// RESIZE
// --------------------------------------------------

function resize(): void {
  if (!container.value || !renderer || !camera) {
    return
  }

  const width = container.value.clientWidth

  const height = container.value.clientHeight

  renderer.setSize(width, height)

  camera.aspect = width / height

  camera.updateProjectionMatrix()
}

// --------------------------------------------------
// LIMPIEZA
// --------------------------------------------------

function dispose(): void {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame)

    animationFrame = null
  }

  window.removeEventListener('resize', resize)

  if (renderer) {
    renderer.dispose()
    renderer = null
  }

  scene = null
  camera = null
  skull = null
}

function onPointerDown(event: PointerEvent): void {
  if (!skull || !canvas.value) {
    return
  }

  isDragging = true

  previousX = event.clientX
  previousY = event.clientY

  canvas.value.setPointerCapture(event.pointerId)
}

function onPointerMove(event: PointerEvent): void {
  if (!isDragging || !skull) {
    return
  }

  const deltaX = event.clientX - previousX

  const deltaY = event.clientY - previousY

  previousX = event.clientX
  previousY = event.clientY

  // Rotación horizontal

  skull.rotation.y += deltaX * rotationSpeed

  // Rotación vertical

  skull.rotation.x += deltaY * rotationSpeed

  // Limitar inclinación vertical

  skull.rotation.x = Math.max(-rotationLimit, Math.min(rotationLimit, skull.rotation.x))
}

function onPointerUp(event: PointerEvent): void {
  isDragging = false

  if (canvas.value && canvas.value.hasPointerCapture(event.pointerId)) {
    canvas.value.releasePointerCapture(event.pointerId)
  }
}
// --------------------------------------------------
// CICLO DE VIDA
// --------------------------------------------------

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  dispose()
})
</script>

<style scoped>
.skull-viewer {
  position: relative;

  width: 100%;
  height: 600px;

  overflow: hidden;

  background: radial-gradient(ellipse at center, #1a2228 0%, #12181c 70%);
}

canvas {
  display: block;

  width: 100%;
  height: 100%;

  cursor: grab;
  touch-action: none;
}

canvas:active {
  cursor: grabbing;
}

.loading,
.error {
  position: absolute;

  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: monospace;
}

.loading {
  color: white;
}

.error {
  color: #ef4444;
}
</style>
