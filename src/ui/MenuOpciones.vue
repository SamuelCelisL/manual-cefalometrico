<script setup lang="ts">
import { useRoute } from 'vue-router'
import IconsSVG from '@/components/IconsSVG.vue'
// import ModalValidarEliminacion from '@/ui/ModalValidarEliminacion.vue'
// import router from '@/router'
import { ref } from 'vue'

const roleUser = ref<string>('')
const route = useRoute()
roleUser.value = localStorage.getItem('role') || ''
</script>

<template>
  <div
    class="w-full h-full items-center flex flex-col shadow shadow-border-primary bg-background-primary sticky top-0"
  >
    <div
      class="flex flex-col justify-center items-center border-b-3 gap-3 border-border-primary w-full"
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
          route.path === '/inicio'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
      >
        <IconsSVG name="iconoBrillo" />
        Puntos Cefalométricos
      </button>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans ',
          route.path === '/inicio/proyectos' || route.path === '/inicio/grupos'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
      >
        <IconsSVG name="iconoHome" />
        Medidas Horizontales
      </button>
      <button
        :class="[
          ' pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          route.path === '/inicio/ajustes'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
      >
        <IconsSVG name="iconoSeñalWifi" />
        Medidas Verticales
      </button>

      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          route.path === '/inicio/cuenta'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
      >
        <IconsSVG name="iconoDental" />
        Medidas Dentales
      </button>
      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          route.path === '/inicio/ayuda'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
      >
        <IconsSVG name="iconoAyuda" />
        Espacio Faríngeo
      </button>
      <button
        :class="[
          'pl-5 py-2 flex gap-2 items-center w-full transition-all duration-200 cursor-pointer font-sans',
          route.path === '/inicio/ayuda'
            ? 'text-text-titles bg-border-primary/40 border-border-primary border-l-5'
            : 'bg-none hover:bg-border-primary/20 text-text-suaves/80 hover:border-l-5 border-border-primary hover:text-text-titles',
        ]"
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
