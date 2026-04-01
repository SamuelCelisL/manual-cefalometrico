<script lang="ts" setup>
import MenuOpciones from '@/ui/MenuOpciones.vue'
import CabeceraPage from '@/ui/CabeceraPage.vue'
import PuntosCefalicos from '@/ui/PuntosCefalicos.vue'
import MedidasHorizontales from '@/ui/MedidasHorizontales.vue'
import MedidasVerticales from '@/ui/MedidasVerticales.vue'
import MedidasDentales from '@/ui/MedidasDentales.vue'
import EspacioFaringeo from '@/ui/EspacioFaringeo.vue'
import EquipoTrabajo from '@/ui/EquipoTrabajo.vue'

import { ref, watch } from 'vue'

const openMenu = ref<boolean>(false)
watch(openMenu, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="w-full h-screen">
    <div class="w-full h-full flex">
      <div
        class="md:hidden fixed top-0 left-0 right-0 h-14 bg-transparent z-50 flex items-center px-4"
      >
        <button
          @click="openMenu = !openMenu"
          class="fixed top-4 p-2 bg-gray-300 rounded-lg shadow transition-all duration-300"
          :class="openMenu ? ' right-4' : ' left-4'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <!-- Icono hamburguesa -->
            <path
              v-if="!openMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <!-- Icono de cerrar -->
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <Transition
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        enter-active-class="transition duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
        leave-active-class="transition duration-300"
      >
        <div v-if="openMenu" class="fixed inset-0 z-40 flex">
          <!-- MENÚ A LA IZQUIERDA -->
          <div class="w-100 bg-gray-100 shadow-xl transform">
            <MenuOpciones />
          </div>

          <!-- FONDO -->
          <div class="backdrop-blur-[1px] w-full h-full" @click="openMenu = false"></div>
        </div>
      </Transition>
      <div class="hidden md:block md:max-w-[20%] w-full">
        <MenuOpciones />
      </div>
      <div class="w-full h-full flex flex-col items-center gap-5 overflow-y-auto">
        <div class="w-full flex flex-col">
          <CabeceraPage />
        </div>
        <div class="w-full flex flex-col" id="puntocefalicos" data-seccion>
          <PuntosCefalicos />
        </div>
        <div class="w-full flex flex-col" id="medidadhorizontales" data-seccion>
          <MedidasHorizontales />
        </div>
        <div class="w-full flex flex-col" id="medidasverticales" data-seccion>
          <MedidasVerticales />
        </div>
        <div class="w-full flex flex-col" id="medidasdentales" data-seccion>
          <MedidasDentales />
        </div>
        <div class="w-full flex flex-col" id="espaciofaringeo" data-seccion>
          <EspacioFaringeo />
        </div>
        <div class="w-full flex flex-col" id="equipotrabajo" data-seccion>
          <EquipoTrabajo />
        </div>
      </div>
    </div>
  </div>
</template>
