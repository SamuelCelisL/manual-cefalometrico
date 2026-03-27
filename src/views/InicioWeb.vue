<script lang="ts" setup>
console.log('InicioWeb.vue')
import MenuOpciones from '@/ui/MenuOpciones.vue'
import CabeceraPage from '@/ui/CabeceraPage.vue'
import PuntosCefalicos from '@/ui/PuntosCefalicos.vue'
import MedidasHorizontales from '@/ui/MedidasHorizontales.vue'
import MedidasVerticales from '@/ui/MedidasVerticales.vue'
import MedidasDentales from '@/ui/MedidasDentales.vue'
import EspacioFaringeo from '@/ui/EspacioFaringeo.vue'
import EquipoTrabajo from '@/ui/EquipoTrabajo.vue'
</script>

<template>
  <div class="w-full h-screen">
    <div class="w-full h-full flex">
      <div class="h-full w-[30%] flex">
        <MenuOpciones />
      </div>
      <div class="w-full h-full flex flex-col items-center gap-5 overflow-y-auto">
        <div class="w-full flex flex-col">
          <CabeceraPage />
        </div>
        <div class="w-full flex flex-col">
          <PuntosCefalicos />
        </div>
        <div class="w-full flex flex-col">
          <MedidasHorizontales />
        </div>
        <div class="w-full flex flex-col">
          <MedidasVerticales />
        </div>
        <div class="w-full flex flex-col">
          <MedidasDentales />
        </div>
        <div class="w-full flex flex-col">
          <EspacioFaringeo />
        </div>
        <div class="w-full flex flex-col">
          <EquipoTrabajo />
        </div>

        <h1 class="text-4xl font-bold">Bienvenido a Manual Web</h1>
      </div>
    </div>
  </div>
</template>
