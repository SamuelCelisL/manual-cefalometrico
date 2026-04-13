<script setup lang="ts">
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
  text2: {
    type: String,
    required: false,
  },
  text3: {
    type: String,
    required: false,
  },
  tituloNorma: {
    type: String,
    default: 'Norma',
    required: false,
  },
  norma: {
    type: String,
    required: false,
  },
  tituloSD: {
    type: String,
    default: 'SD',
    required: false,
  },
  SD: {
    type: String,
    required: false,
  },
  tituloRango: {
    type: String,
    default: 'Rango',
    required: false,
  },
  rango: {
    type: String,
    required: false,
  },
  Valores1: {
    type: String,
    default: 'MEDIDA AUMENTADA',
    required: false,
  },
  tabla1: {
    type: String,
    required: false,
  },
  Valores2: {
    type: String,
    default: 'MEDIDAD EN NORMA',
    required: false,
  },
  tabla2: {
    type: String,
    required: false,
  },
  Valores3: {
    type: String,
    default: 'MEDIDA DISMINUIDA',
    required: false,
  },
  tabla3: {
    type: String,
    required: false,
  },
  anexo: {
    type: String,
    required: false,
  },
  citacion: {
    type: String,
    required: false,
  },
})
</script>

<template>
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
        <div class="flex flex-col gap-2 flex-1 text-sm md:text-base">
          <p>{{ text1 }}</p>
          <p>{{ text2 }}</p>
          <p v-if="text3">{{ text3 }}</p>

          <!-- TABLA -->
          <div class="my-2 overflow-x-auto flex items-center justify-center">
            <table class="w-auto text-[10px] sm:text-sm text-center border border-gray-300">
              <thead class="border-b border-gray-400 bg-blue-200">
                <tr>
                  <th class="uppercase px-5 py-1 border border-gray-400">
                    {{ tituloNorma }}
                  </th>
                  <th class="uppercase px-2 py-1 border border-gray-400">
                    {{ tituloSD }}
                  </th>
                  <th class="uppercase px-2 py-1 border border-gray-400">
                    {{ tituloRango }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-300">
                  <td class="p-2 border border-gray-400">{{ norma }}</td>
                  <td class="p-2 border border-gray-400">{{ SD }}</td>
                  <td class="p-2 border border-gray-400">{{ rango }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex gap-2">
            <p class="text-red-600 uppercase">{{ Valores1 }}:</p>
            <p class="">{{ tabla1 }}</p>
          </div>
          <div class="flex gap-2">
            <p class="text-green-600 uppercase">{{ Valores2 }}:</p>
            <p class="">{{ tabla2 }}</p>
          </div>
          <div class="flex gap-2">
            <p class="text-yellow-600 uppercase">{{ Valores3 }}:</p>
            <p class="">{{ tabla3 }}</p>
          </div>

          <!-- CITACIÓN -->
          <div v-if="anexo" class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs">
              {{ anexo }}
            </p>
          </div>

          <!-- CITACIÓN -->
          <div v-if="citacion" class="flex justify-center">
            <p class="text-center text-[10px] md:text-xs text-gray-600">
              {{ citacion }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
