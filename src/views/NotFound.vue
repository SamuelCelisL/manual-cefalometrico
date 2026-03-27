<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { dirigirAInicio } from '@/utils/redirecciones'
const router = useRouter()
</script>

<template>
  <div class="w-full h-screen">
    <div class="flex flex-col justify-center items-center h-full gap-3">
      <h1
        class="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#2A496C] to-[#3D8CFF] p-3"
      >
        404 - Página no encontrada
      </h1>
      <p class="font-semibold">Lo sentimos, la página que buscas no existe.</p>
      <button
        class="border rounded-xl p-3 bg-[#3D8CFF] text-white font-bold cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-200"
        @click="router.push('/inicio')"
      >
        Volver al inicio
      </button>
    </div>
  </div>
</template>
