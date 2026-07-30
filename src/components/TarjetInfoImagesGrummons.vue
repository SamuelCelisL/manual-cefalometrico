<script setup lang="ts">
import type { PropType } from 'vue'

interface Medida {
  medida: string
  derecho: string
  izquierdo: string
}
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    required: false,
  },
  viñeta1: {
    type: String,
    required: false,
  },
  viñeta2: {
    type: String,
    required: false,
  },
  viñeta3: {
    type: String,
    required: false,
  },
  viñeta4: {
    type: String,
    required: false,
  },
  viñeta5: {
    type: String,
    required: false,
  },
  medidas: {
    type: Array as PropType<Medida[]>,
    required: false,
  },
})
</script>
<template>
  <!-- TARJETA 1 -->
  <div class="w-full flex justify-center">
    <div
      class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-[1.02] transition-all duration-200 w-full max-w-5xl"
    >
      <!-- HEADER -->
      <div class="bg-background-primary rounded-t-xl px-4 py-2">
        <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-text-suaves">
          {{ title }}
        </h2>
      </div>

      <!-- BODY -->
      <div class="flex flex-col md:flex-row rounded-b-xl p-3 gap-4">
        <!-- IMAGEN -->
        <div class="flex justify-center items-center md:border-r md:pr-4 border-gray-400">
          <img :src="imageSrc" :alt="title" class="w-40 sm:w-52 md:w-64 lg:w-72 object-contain" />
        </div>

        <!-- CONTENIDO -->
        <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
          <p v-if="text1">{{ text1 }}</p>
          <ul class="list-disc list-inside">
            <li v-if="viñeta1">{{ viñeta1 }}</li>
            <li v-if="viñeta2">{{ viñeta2 }}</li>
            <li v-if="viñeta3">{{ viñeta3 }}</li>
            <li v-if="viñeta4">{{ viñeta4 }}</li>
            <li v-if="viñeta5" v-html="viñeta5"></li>
          </ul>

          <!-- TABLA -->
          <div v-if="medidas" class="my-2 overflow-x-auto flex items-center justify-center">
            <table class="w-auto text-[10px] sm:text-sm text-center border border-gray-300">
              <thead class="border-b border-gray-400 bg-blue-200">
                <tr>
                  <th class="uppercase px-5 py-1">Medida</th>
                  <th class="uppercase px-10 py-1">Derecho</th>
                  <th class="uppercase px-10 py-1">Izquierdo</th>
                  <th class="uppercase px-10 py-1">Simetría</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Fila in medidas" :key="Fila.medida" class="border-t border-gray-300">
                  <td class="p-2 font-semibold" v-html="Fila.medida"></td>
                  <td class="p-2">{{ Fila.derecho }}</td>
                  <td class="p-2">{{ Fila.izquierdo }}</td>
                  <td class="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
