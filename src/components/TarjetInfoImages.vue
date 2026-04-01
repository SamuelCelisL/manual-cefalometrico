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

          <p v-if="norma" class="text-blue-600">{{ norma }}</p>
          <p v-if="rango" class="text-blue-600">{{ rango }}</p>
          <p v-if="h" class="text-blue-600">{{ h }}</p>
          <p v-if="m" class="text-blue-600">{{ m }}</p>

          <!-- TABLA -->
          <div class="my-2 overflow-x-auto">
            <table class="w-full text-[10px] sm:text-sm text-center border border-gray-300">
              <thead class="border-b border-gray-400">
                <tr>
                  <th class="text-red-600 uppercase px-2 py-1">
                    {{ titulotabla1 }}
                  </th>
                  <th class="text-green-600 uppercase px-2 py-1">
                    {{ titulotabla2 }}
                  </th>
                  <th class="text-yellow-600 uppercase px-2 py-1">
                    {{ titulotabla3 }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-300">
                  <td class="p-2">{{ tabla1 }}</td>
                  <td class="p-2">{{ tabla2 }}</td>
                  <td class="p-2">{{ tabla3 }}</td>
                </tr>
              </tbody>
            </table>
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
