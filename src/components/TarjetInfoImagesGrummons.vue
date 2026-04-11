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
  Medida1: {
    type: String,
    required: false,
  },
  derecho1: {
    type: String,
    required: false,
    default: 'mm',
  },
  izquierdo1: {
    type: String,
    required: false,
    default: 'mm',
  },
  Medida2: {
    type: String,
    required: false,
  },
  derecho2: {
    type: String,
    required: false,
    default: 'mm',
  },
  izquierdo2: {
    type: String,
    required: false,
    default: 'mm',
  },
  Medida3: {
    type: String,
    required: false,
  },
  derecho3: {
    type: String,
    required: false,
    default: 'mm',
  },
  izquierdo3: {
    type: String,
    required: false,
    default: 'mm',
  },
  Medida4: {
    type: String,
    required: false,
  },
  derecho4: {
    type: String,
    required: false,
    default: 'mm',
  },
  izquierdo4: {
    type: String,
    required: false,
    default: 'mm',
  },
  Medida5: {
    type: String,
    required: false,
  },
  derecho5: {
    type: String,
    required: false,
    default: 'mm',
  },
  izquierdo5: {
    type: String,
    required: false,
    default: 'mm',
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
          <div class="my-2 overflow-x-auto flex items-center justify-center">
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
                <tr v-if="Medida1" class="border-t border-gray-300">
                  <td class="p-2 text-green-600 font-semibold" v-html="Medida1"></td>
                  <td class="p-2">{{ derecho1 }}</td>
                  <td class="p-2">{{ izquierdo1 }}</td>
                  <td class="p-2"></td>
                </tr>
                <tr v-if="Medida2" class="border-t border-gray-300">
                  <td class="p-2 text-blue-600 font-semibold" v-html="Medida2"></td>
                  <td class="p-2">{{ derecho2 }}</td>
                  <td class="p-2">{{ izquierdo2 }}</td>
                  <td class="p-2"></td>
                </tr>
                <tr v-if="Medida3" class="border-t border-gray-300">
                  <td class="p-2 text-pink-600 font-semibold" v-html="Medida3"></td>
                  <td class="p-2">{{ derecho3 }}</td>
                  <td class="p-2">{{ izquierdo3 }}</td>
                  <td class="p-2"></td>
                </tr>
                <tr v-if="Medida4" class="border-t border-gray-300">
                  <td class="p-2 text-orange-500 font-semibold" v-html="Medida4"></td>
                  <td class="p-2">{{ derecho4 }}</td>
                  <td class="p-2">{{ izquierdo4 }}</td>
                  <td class="p-2"></td>
                </tr>
                <tr v-if="Medida5" class="border-t border-gray-300">
                  <td class="p-2 text-purple-600 font-semibold" v-html="Medida5"></td>
                  <td class="p-2">{{ derecho5 }}</td>
                  <td class="p-2">{{ izquierdo5 }}</td>
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
