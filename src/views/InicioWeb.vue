<script lang="ts" setup>
console.log('InicioWeb.vue')
import MenuOpciones from '@/ui/MenuOpciones.vue'
import CabeceraPage from '@/ui/CabeceraPage.vue'
</script>

<template>
  <div class="w-full h-screen">
    <div class="w-full h-full flex">
      <div class="h-full w-[30%] flex">
        <MenuOpciones />
      </div>
      <div class="w-full h-full flex flex-col items-center gap-5">
        <div class="w-full flex flex-col">
          <CabeceraPage />
        </div>
        <h1 class="text-4xl font-bold">Bienvenido a Manual Web</h1>
      </div>
    </div>
  </div>
</template>
