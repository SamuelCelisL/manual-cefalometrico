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
    required: true,
  },
  text2: {
    type: String,
    required: true,
  },
  norma: {
    type: String,
    required: true,
  },
  rango: {
    type: String,
    required: true,
  },
  tabla1: {
    type: String,
    required: true,
  },
  tabla2: {
    type: String,
    required: true,
  },
  tabla3: {
    type: String,
    required: true,
  },
  citacion: {
    type: String,
    required: true,
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
          <p class="text-blue-600">{{ norma }}</p>
          <p class="text-blue-600">{{ rango }}</p>
          <div class="my-2">
            <table>
              <thead class="border-t border-gray-400">
                <th class="text-red-600 uppercase px-2">Media Aumentada</th>
                <th class="text-green-600 uppercase px-2">Media en Norma</th>
                <th class="text-yellow-600 uppercase px-2">Media Disminuida</th>
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
          <div class="flex justify-center items-center">
            <p class="text-center text-[10px] text-gray-800">{{ citacion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
