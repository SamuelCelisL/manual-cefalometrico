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
  norma: {
    type: String,
    required: false,
  },
  rango: {
    type: String,
    required: false,
  },
  h: {
    type: String,
    required: false,
  },
  m: {
    type: String,
    required: false,
  },
  titulotabla1: {
    type: String,
    default: 'MEDIDA AUMENTADA',
    required: false,
  },
  tabla1: {
    type: String,
    required: false,
  },
  titulotabla2: {
    type: String,
    default: 'MEDIDA EN NORMA',
    required: false,
  },
  tabla2: {
    type: String,
    required: false,
  },
  titulotabla3: {
    type: String,
    default: 'MEDIDA DISMINUIDA',
    required: false,
  },
  tabla3: {
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
  <div class="flex">
    <div
      class="flex flex-col rounded-xl shadow-lg shadow-gray-400 hover:scale-103 transition-all duration-200"
    >
      <div class="flex bg-background-primary rounded-t-xl px-5 py-1">
        <h2 class="text-xl font-bold text-text-suaves font-sans">{{ title }}</h2>
      </div>
      <div class="flex rounded-b-xl px-3 items-center">
        <div class="shrink-0 border-r border-gray-400 flex items-center justify-center">
          <img :src="imageSrc" :alt="title" class="size-80" />
        </div>
        <div class="flex flex-col gap-2 py-2 pl-5 w-lg">
          <p>{{ text1 }}</p>
          <p>{{ text2 }}</p>
          <p v-if="text3">{{ text3 }}</p>
          <p v-if="norma" class="text-blue-600">{{ norma }}</p>
          <p v-if="rango" class="text-blue-600">{{ rango }}</p>
          <p v-if="h" class="text-blue-600">{{ h }}</p>
          <p v-if="m" class="text-blue-600">{{ m }}</p>
          <div class="my-2">
            <table>
              <thead class="border-t border-gray-400">
                <th class="text-red-600 uppercase px-2">{{ titulotabla1 }}</th>
                <th class="text-green-600 uppercase px-2">{{ titulotabla2 }}</th>
                <th class="text-yellow-600 uppercase px-2">{{ titulotabla3 }}</th>
              </thead>
              <tbody class="border-t border-b border-gray-400">
                <td class="p-2">
                  <p class="flex text-center justify-center">{{ tabla1 }}</p>
                </td>
                <td class="p-2">
                  <p class="flex text-center justify-center">{{ tabla2 }}</p>
                </td>
                <td class="p-2">
                  <p class="flex text-center justify-center">{{ tabla3 }}</p>
                </td>
              </tbody>
            </table>
          </div>
          <div v-if="citacion" class="flex justify-center items-center">
            <p class="text-center text-[10px] text-gray-800">{{ citacion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
