<script setup lang="ts">
import IconsSVG from '@/components/IconsSVG.vue'
import { ref, onMounted, nextTick } from 'vue'

const seccionActiva = ref('inicioSteiner')
const subtituloActivo = ref('inicioSteiner')
const menuAbierto = ref<string | null>(null)

const roleUser = ref<string>('')
roleUser.value = localStorage.getItem('role') || ''

const props = defineProps<{
  contenedorScroll: HTMLElement | null
}>()

const toggleMenu = (menu: string) => {
  menuAbierto.value = menuAbierto.value === menu ? null : menu
}

const irASubtitulo = (id: string) => {
  seccionActiva.value = id // activa inmediatamente
  subtituloActivo.value = id // activa inmediatamente
  const el = document.getElementById(id)

  if (el && props.contenedorScroll) {
    props.contenedorScroll.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth',
    })
  }
}

const obtenerSeccionPadre = (id: string) => {
  if (id.startsWith('inicioSteiner')) return 'inicioSteiner'
  if (id.startsWith('PuntosCefalometricosSteiner')) return 'PuntosCefalometricosSteiner'
  if (id.startsWith('relacionVerticalSteiner')) return 'relacionVerticalSteiner'
  if (id.startsWith('relacionDentalSteiner')) return 'relacionDentalSteiner'
  if (id.startsWith('witsSteiner')) return 'witsSteiner'
  if (id.startsWith('PuntosCefalometricosMacnamara')) return 'PuntosCefalometricosMacnamara'
  if (id.startsWith('TablaBurlingtonMcnamara')) return 'TablaBurlingtonMcnamara'
  if (id.startsWith('TablaBoltonMcnamara')) return 'TablaBoltonMcnamara'
  if (id.startsWith('TablaAnnArborMcnamara')) return 'TablaAnnArborMcnamara'
  if (id.startsWith('MedidasHorizontalesMcnamara')) return 'MedidasHorizontalesMcnamara'
  if (id.startsWith('medidasVerticalesMcnamara')) return 'medidasVerticalesMcnamara'
  if (id.startsWith('medidasDentalesMcnamara')) return 'medidasDentalesMcnamara'
  if (id.startsWith('medidasFaringeasMcnamara')) return 'medidasFaringeasMcnamara'
  if (id.startsWith('PuntosCefalometricosLeganBurstone')) return 'PuntosCefalometricosLeganBurstone'
  if (id.startsWith('PuntosCefalometricosLeganBurstoneDuros'))
    return 'PuntosCefalometricosLeganBurstoneDuros'
  if (id.startsWith('VerticalesqueleticoLeganBurstoneDuros'))
    return 'VerticalesqueleticoLeganBurstoneDuros'
  if (id.startsWith('MaxilarmandibularLeganBurstoneDuros'))
    return 'MaxilarmandibularLeganBurstoneDuros'
  if (id.startsWith('TejidosDurosDentalesLeganBurstone')) return 'TejidosDurosDentalesLeganBurstone'
  if (id.startsWith('PuntosCefalometricosSaossuni')) return 'PuntosCefalometricosSaossuni'
  if (id.startsWith('ProporcionesHorizontalesSaossuni')) return 'ProporcionesHorizontalesSaossuni'
  if (id.startsWith('PuntosCefalometricosGrummons')) return 'PuntosCefalometricosGrummons'
  if (id.startsWith('PuntosCefalometricosBimler')) return 'PuntosCefalometricosBimler'
  if (id.startsWith('MedidasAngularesBimler')) return 'MedidasAngularesBimler'
  return ''
}

onMounted(async () => {
  await nextTick()

  if (!props.contenedorScroll) return
  const secciones = document.querySelectorAll('[data-seccion]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          // seccionActiva.value = entry.target.id
          subtituloActivo.value = id
          seccionActiva.value = obtenerSeccionPadre(id)
        }
      })
    },
    {
      root: props.contenedorScroll, // MUY IMPORTANTE en tu caso
      threshold: 0.1, // cuando 50% esté visible
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
    <div class="h-[80%] overflow-y-auto w-full pt-4 items-center flex flex-col scroll-custom">
      <h3 class="font-mono text-md text-text-titles w-full text-start px-5">Contenido</h3>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
          seccionActiva === 'inicioSteiner' ||
          seccionActiva === 'PuntosCefalometricosSteiner' ||
          seccionActiva === 'relacionVerticalSteiner' ||
          seccionActiva === 'relacionDentalSteiner' ||
          seccionActiva === 'witsSteiner'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('steinerView')"
      >
        <IconsSVG name="iconoBrillo" />
        Steiner
      </button>
      <div v-if="menuAbierto === 'steinerView'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('inicioSteiner')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'inicioSteiner'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Inicio
        </button>

        <button
          @click="irASubtitulo('PuntosCefalometricosSteiner')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center text-left w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'PuntosCefalometricosSteiner'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Puntos Cefalométricos de Análisis de Steiner
        </button>

        <button
          @click="irASubtitulo('relacionVerticalSteiner')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'relacionVerticalSteiner'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Análisis de Steiner: Relación Vertical
        </button>

        <button
          @click="irASubtitulo('relacionDentalSteiner')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'relacionDentalSteiner'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Análisis de Steiner: Relación Dental
        </button>

        <button
          @click="irASubtitulo('witsSteiner')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'witsSteiner'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Análisis de Wits
        </button>
      </div>

      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
          seccionActiva === 'mcnamaraView' ||
          subtituloActivo === 'PuntosCefalometricosMcnamara' ||
          subtituloActivo === 'TablaBurlingtonMcnamara' ||
          subtituloActivo === 'TablaBoltonMcnamara' ||
          subtituloActivo === 'TablaAnnArborMcnamara' ||
          subtituloActivo === 'MedidasHorizontalesMcnamara' ||
          subtituloActivo === 'medidasVerticalesMcnamara' ||
          subtituloActivo === 'medidasDentalesMcnamara' ||
          subtituloActivo === 'medidasFaringeasMcnamara'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('mcnamaraView')"
      >
        <IconsSVG name="iconoHome" />
        Mcnamara
      </button>
      <div v-if="menuAbierto === 'mcnamaraView'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('PuntosCefalometricosMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'PuntosCefalometricosMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Puntos Cefalométricos
        </button>
        <button
          @click="irASubtitulo('TablaBurlingtonMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'TablaBurlingtonMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tabla de Burlington
        </button>
        <button
          @click="irASubtitulo('TablaBoltonMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'TablaBoltonMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tabla de Bolton
        </button>
        <button
          @click="irASubtitulo('TablaAnnArborMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'TablaAnnArborMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tabla de Ann Arbor
        </button>

        <button
          @click="irASubtitulo('MedidasHorizontalesMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center text-left w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'MedidasHorizontalesMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Medidas Horizontales
        </button>

        <button
          @click="irASubtitulo('medidasVerticalesMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'medidasVerticalesMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Medidas Verticales
        </button>

        <button
          @click="irASubtitulo('medidasDentalesMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'medidasDentalesMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Medidas Dentales
        </button>

        <button
          @click="irASubtitulo('medidasFaringeasMcnamara')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
            subtituloActivo === 'medidasFaringeasMcnamara'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Medidas Faringeas
        </button>
      </div>

      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'leganburstoneView' ||
          subtituloActivo === 'PuntosCefalometricosLeganBurstone' ||
          subtituloActivo === 'PuntosCefalometricosLeganBurstoneDuros' ||
          subtituloActivo === 'VerticalesqueleticoLeganBurstoneDuros' ||
          subtituloActivo === 'MaxilarmandibularLeganBurstoneDuros' ||
          subtituloActivo === 'TejidosDurosDentalesLeganBurstone'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('leganburstoneView')"
      >
        <IconsSVG name="iconoSeñalWifi" />
        Legan y Burstone
      </button>
      <div v-if="menuAbierto === 'leganburstoneView'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('PuntosCefalometricosLeganBurstone')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'PuntosCefalometricosLeganBurstone'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tejidos Blandos: Puntos Cefalométricos
        </button>
        <button
          @click="irASubtitulo('PuntosCefalometricosLeganBurstoneDuros')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'PuntosCefalometricosLeganBurstoneDuros'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tejidos Duros: Puntos Cefalométricos
        </button>
        <button
          @click="irASubtitulo('VerticalesqueleticoLeganBurstoneDuros')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'VerticalesqueleticoLeganBurstoneDuros'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Vertical Esquelético
        </button>
        <button
          @click="irASubtitulo('MaxilarmandibularLeganBurstoneDuros')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'MaxilarmandibularLeganBurstoneDuros'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Maxilar - Mandibular
        </button>
        <button
          @click="irASubtitulo('TejidosDurosDentalesLeganBurstone')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'TejidosDurosDentalesLeganBurstone'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Tejidos Duros Dentales
        </button>
      </div>

      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'saossuni' ||
          subtituloActivo === 'PuntosCefalometricosSaossuni' ||
          subtituloActivo === 'ProporcionesHorizontalesSaossuni'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('saossuni')"
      >
        <IconsSVG name="iconoDental" />
        Saossuni
      </button>

      <div v-if="menuAbierto === 'saossuni'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('PuntosCefalometricosSaossuni')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'PuntosCefalometricosSaossuni'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Puntos Cefalométricos
        </button>
        <button
          @click="irASubtitulo('ProporcionesHorizontalesSaossuni')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'ProporcionesHorizontalesSaossuni'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Proporciones Horizontales
        </button>
      </div>

      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'grummons' || subtituloActivo === 'PuntosCefalometricosGrummons'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('grummons')"
      >
        <IconsSVG name="iconoAyuda" />
        Grummons
      </button>
      <div v-if="menuAbierto === 'grummons'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('PuntosCefalometricosGrummons')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'PuntosCefalometricosGrummons'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Puntos Cefalométricos
        </button>
      </div>

      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          seccionActiva === 'bimler' ||
          subtituloActivo === 'PuntosCefalometricosBimler' ||
          subtituloActivo === 'MedidasAngularesBimler'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
        @click="toggleMenu('bimler')"
      >
        <IconsSVG name="iconoAyuda" />
        Bimler
      </button>
      <div v-if="menuAbierto === 'bimler'" class="w-full pl-5 flex flex-col">
        <button
          @click="irASubtitulo('PuntosCefalometricosBimler')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'PuntosCefalometricosBimler'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Puntos Cefalométricos
        </button>
        <button
          @click="irASubtitulo('MedidasAngularesBimler')"
          :class="[
            ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans text-left',
            subtituloActivo === 'MedidasAngularesBimler'
              ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
              : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
          ]"
        >
          Medidas Angulares
        </button>
      </div>
    </div>

    <div class="w-full h-[5%] flex justify-center items-center border-t border-border-primary/30">
      <h1
        class="text-white/30 w-full text-center text-[8px] sm:text-[10px] md:text-[12px] lg:text-md"
      >
        Copyright © 2025 DataPioneers
      </h1>
    </div>
  </div>
</template>

<style>
.scroll-custom {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #888 transparent;
}

/* Chrome, Edge, Safari */
.scroll-custom::-webkit-scrollbar {
  width: 6px;
}

.scroll-custom::-webkit-scrollbar-track {
  background: transparent;
}

.scroll-custom::-webkit-scrollbar-thumb {
  background-color: rgba(120, 120, 120, 0.5);
  border-radius: 9999px;
  transition: background-color 0.3s;
}

.scroll-custom::-webkit-scrollbar-thumb:hover {
  background-color: rgba(120, 120, 120, 0.8);
}
</style>
