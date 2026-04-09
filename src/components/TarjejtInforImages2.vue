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
  norma1: {
    type: String,
    required: false,
  },
  norma2: {
    type: String,
    required: false,
  },
  tituloRango: {
    type: String,
    default: 'Rango',
    required: false,
  },
  rango1: {
    type: String,
    required: false,
  },
  rango2: {
    type: String,
    required: false,
  },
  tituloSD: {
    type: String,
    default: 'SD',
    required: false,
  },
  SD1: {
    type: String,
    required: false,
  },
  SD2: {
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
  Valores4: {
    type: String,
    default: 'MEDIDA DISMINUIDA',
    required: false,
  },
  tabla4: {
    type: String,
    required: false,
  },
  citacion: {
    type: String,
    required: false,
  },
  tabla: {
    type: Boolean,
    required: false,
    default: true,
  },
  norma: {
    type: String,
    required: false,
  },
  m: {
    type: String,
    required: false,
  },
  h: {
    type: String,
    required: false,
  },
  anexo: {
    type: String,
    required: false,
  },
  anexo2: {
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
        <div class="flex flex-col gap-2 flex-1 text-sm md:text-base justify-center">
          <p>{{ text1 }}</p>
          <p>{{ text2 }}</p>
          <p v-if="text3">{{ text3 }}</p>

          <!-- TABLA -->
          <div v-if="tabla" class="my-2 overflow-x-auto flex items-center justify-center">
            <table class="w-auto text-[10px] sm:text-sm text-center border border-gray-300">
              <thead class="border-b border-gray-400">
                <tr>
                  <th v-if="norma1" class="text-blue-600 uppercase px-5 py-1"></th>
                  <th v-if="norma1" class="text-blue-600 uppercase px-5 py-1">{{ tituloNorma }}</th>
                  <th v-if="SD1" class="text-blue-600 uppercase px-2 py-1">{{ tituloSD }}</th>
                  <th v-if="rango1" class="text-blue-600 uppercase px-2 py-1">{{ tituloRango }}</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-300">
                  <td v-if="norma1" class="p-2 text-blue-600">Hombre</td>
                  <td v-if="norma1" class="p-2">{{ norma1 }}</td>
                  <td v-if="SD1" class="p-2">{{ SD1 }}</td>
                  <td v-if="rango1" class="p-2">{{ rango1 }}</td>
                </tr>
                <tr v-if="norma2 || SD2 || rango2" class="border-t border-gray-300">
                  <td v-if="norma2" class="p-2 text-blue-600">Mujer</td>
                  <td v-if="norma2" class="p-2">{{ norma2 }}</td>
                  <td v-if="SD2" class="p-2">{{ SD2 }}</td>
                  <td v-if="rango2" class="p-2">{{ rango2 }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p v-if="norma" class="text-blue-600">{{ norma }}</p>
          <p v-if="m" class="text-blue-600">{{ m }}</p>
          <p v-if="h" class="text-blue-600">{{ h }}</p>

          <div v-if="tabla1" class="flex gap-2">
            <p class="text-red-600 uppercase">{{ Valores1 }}:</p>
            <p class="">{{ tabla1 }}</p>
          </div>
          <div v-if="tabla2" class="flex gap-2">
            <p class="text-green-600 uppercase">{{ Valores2 }}:</p>
            <p class="">{{ tabla2 }}</p>
          </div>
          <div v-if="tabla3" class="flex gap-2">
            <p class="text-yellow-600 uppercase">{{ Valores3 }}:</p>
            <p class="">{{ tabla3 }}</p>
          </div>
          <div v-if="tabla4" class="flex gap-2">
            <p class="text-blue-600 uppercase">{{ Valores4 }}:</p>
            <p class="">{{ tabla4 }}</p>
          </div>

          <div v-if="anexo" class="flex gap-2">
            <p class=""><span class="font-semibold">Anexo:</span> {{ anexo }}</p>
          </div>

          <div v-if="anexo2" class="flex gap-2">
            <p class="text-gray-600">{{ anexo2 }}</p>
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
