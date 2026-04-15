<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'numero1',
    required: false,
  },
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
  text4: {
    type: String,
    required: false,
  },
  text5: {
    type: String,
    required: false,
  },
  text6: {
    type: String,
    required: false,
  },
  Vacio: {
    type: String,
    required: false,
  },
  titulo1: {
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
  norma3: {
    type: String,
    required: false,
  },
  titulo3: {
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
  rango3: {
    type: String,
    required: false,
  },
  titulo2: {
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
  SD3: {
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
  imagenInfo: {
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
  <div v-if="name === 'numero1'" class="w-full flex justify-center">
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
          <p v-if="text4">{{ text4 }}</p>
          <p v-if="text5" v-html="text5"></p>
          <p v-if="text6" v-html="text6"></p>

          <!-- TABLA -->
          <div v-if="tabla" class="my-2 overflow-x-auto flex items-center justify-center">
            <table class="w-auto text-[10px] sm:text-sm text-center border border-gray-300">
              <thead class="border-b border-gray-400 bg-blue-200">
                <tr>
                  <th v-if="norma1" class="uppercase px-5 py-1 border bg-yellow-400">
                    {{ titulo1 }}
                  </th>
                  <th v-if="SD1" class="uppercase px-2 py-1 border bg-red-600">
                    {{ titulo2 }}
                  </th>
                  <th v-if="rango1" class="uppercase px-2 py-1 border bg-blue-600">
                    {{ titulo3 }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border">
                  <td v-if="norma1" class="p-2 border">{{ norma1 }}</td>
                  <td v-if="SD1" class="p-2 border">{{ SD1 }}</td>
                  <td v-if="rango1" class="p-2 border">{{ rango1 }}</td>
                </tr>
                <tr v-if="norma2 || SD2 || rango2" class="border">
                  <td v-if="norma2" class="p-2 border">{{ norma2 }}</td>
                  <td v-if="SD2" class="p-2 border">{{ SD2 }}</td>
                  <td v-if="rango2" class="p-2 border">{{ rango2 }}</td>
                </tr>
                <tr v-if="norma3 || SD3 || rango3" class="border">
                  <td v-if="norma3" class="p-2 border">{{ norma3 }}</td>
                  <td v-if="SD3" class="p-2 border">{{ SD3 }}</td>
                  <td v-if="rango3" class="p-2 border">{{ rango3 }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div v-if="anexo" class="flex gap-2">
            <p><span class="font-semibold">Anexo:</span> <span v-html="anexo"></span></p>
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
  <div v-if="name === 'numero2'" class="w-full flex justify-center">
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
          <p v-if="text1" v-html="text1"></p>
          <p v-if="text2" v-html="text2"></p>

          <!-- TABLA -->
          <div v-if="tabla" class="my-2 overflow-x-auto flex items-center justify-center">
            <table class="w-auto text-[10px] sm:text-sm text-center border-gray-600">
              <tbody>
                <tr class="">
                  <td v-if="norma1" class="border" v-html="norma1"></td>
                  <td v-if="SD1" class="border" v-html="SD1"></td>
                  <td v-if="rango1" class="border" v-html="rango1"></td>
                </tr>
                <tr v-if="norma2 || SD2 || rango2" class="">
                  <td v-if="norma2" class="border" v-html="norma2"></td>
                  <td v-if="SD2" class="border" v-html="SD2"></td>
                  <td v-if="rango2" class="border" v-html="rango2"></td>
                </tr>
                <tr v-if="norma3 || SD3 || rango3" class="">
                  <td v-if="norma3" class="border" v-html="norma3"></td>
                  <td v-if="SD3" class="border" v-html="SD3"></td>
                  <td v-if="rango3" class="border" v-html="rango3"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-if="imagenInfo"
            class="flex justify-center items-center md:border-r md:pr-4 border-gray-400"
          >
            <img
              :src="imagenInfo"
              :alt="title"
              class="w-40 sm:w-52 md:w-90 lg:w-100 object-contain"
            />
          </div>

          <div v-if="anexo" class="flex gap-2">
            <p><span class="font-semibold">Anexo:</span> <span v-html="anexo"></span></p>
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
