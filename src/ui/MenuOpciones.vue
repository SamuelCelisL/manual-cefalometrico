<script setup lang="ts">
import IconsSVG from '@/components/IconsSVG.vue'
import { ref, onMounted } from 'vue'

const seccionActiva = ref('puntos')

const roleUser = ref<string>('')
roleUser.value = localStorage.getItem('role') || ''

const irASeccion = (id: string) => {
  seccionActiva.value = id // activa inmediatamente
  const el = document.getElementById(id)
  const container = document.querySelector('.overflow-y-auto')

  if (el && container) {
    container.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  const secciones = document.querySelectorAll('[data-seccion]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          seccionActiva.value = entry.target.id
        }
      })
    },
    {
      root: document.querySelector('.overflow-y-auto'), // MUY IMPORTANTE en tu caso
      threshold: 0.5, // cuando 50% esté visible
    },
  )

  secciones.forEach((sec) => observer.observe(sec))
})
</script>

<template>
  <div
    class="w-full h-full items-center flex flex-col shadow shadow-border-primary bg-background-primary sticky top-0"
  >
    <div
      class="flex flex-col justify-center items-center border-b gap-3 border-border-primary w-full"
    >
      <div class="w-full flex p-3">
        <img
          src="../assets/images/image.png"
          alt="Logo del Manual de Cefalometría"
          class="rounded-xl"
        />
      </div>
      <div class="flex flex-col w-full pb-3">
        <h1 class="text-center text-text-titles text-md font-serif">MANUAL DE CEFALOMETRÍA</h1>
        <h2 class="text-center text-text-suaves/80 text-[10px]">DIAGNÓSTICO I - ODONTOLOGICO</h2>
      </div>
    </div>
    <!-- BOTONES -->
    <div class="h-[75%] w-full pt-4 flex flex-col items-center">
      <h3 class="font-mono text-md text-text-titles w-full text-start px-5">Contenido</h3>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
          seccionActiva === 'puntocefalicos'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('puntocefalicos')"
      >
        <IconsSVG name="iconoBrillo" />
        Puntos Cefalométricos
      </button>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
          seccionActiva === 'medidadhorizontales'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('medidadhorizontales')"
      >
        <IconsSVG name="iconoHome" />
        Medidas Horizontales
      </button>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'medidasverticales'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('medidasverticales')"
      >
        <IconsSVG name="iconoSeñalWifi" />
        Medidas Verticales
      </button>

      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'medidasdentales'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('medidasdentales')"
      >
        <IconsSVG name="iconoDental" />
        Medidas Dentales
      </button>
      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'espaciofaringeo'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('espaciofaringeo')"
      >
        <IconsSVG name="iconoAyuda" />
        Espacio Faríngeo
      </button>
      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'equipotrabajo'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="irASeccion('equipotrabajo')"
      >
        <IconsSVG name="iconoUsuarios" />
        Equipo de Trabajo
      </button>
    </div>
    <div class="w-full h-[10%] flex justify-center items-center border-t border-border-primary/30">
      <h1
        class="text-white/30 w-full text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-md"
      >
        Copyright © 2025 DataPioneers
      </h1>
    </div>
  </div>
</template>
