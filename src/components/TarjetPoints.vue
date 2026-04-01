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
  <div class="w-full">
    <div
      class="flex flex-col w-full border border-border-primary/30 rounded-2xl shadow-lg hover:border-border-primary/80 hover:scale-[1.03] transition-all duration-200 p-4 gap-2 bg-white h-full"
    >
      <h1 class="text-background-primary font-bold text-xl md:text-2xl font-serif">
        {{ title }}
      </h1>

      <p class="text-gray-600 text-sm md:text-base">
        {{ body }}
      </p>
    </div>
  </div>
</template>
