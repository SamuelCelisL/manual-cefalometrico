<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex w-80">
    <div
      class="flex flex-col w-80 border border-border-primary/30 rounded-2xl shadow-lg hover:border-border-primary/80 hover:scale-105 transition-all duration-200 p-3 gap-2 bg-white"
    >
      <div class="flex">
        <h1 class="text-background-primary font-bold text-2xl font-serif">{{ title }}</h1>
      </div>
      <div class="flex">
        <p class="flex text-gray-600 text-sm">{{ body }}</p>
      </div>
    </div>
  </div>
</template>
