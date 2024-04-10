<template>
  <div v-if="props.loading" style="height:300px;" class="flex items-center justify-center">
    <svg class="animate-spin h-8 w-8 mr-3 text-gray-500" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a4 4 0 10-3.218 6.38l1.5 1.5A6 6 0 0110 18v-4a4 4 0 00-4-4H2v4.291z">
      </path>
    </svg>
    <span class="text-gray-500">Loading...</span>
  </div>
</template>

<script setup>
const props = defineProps(["loading"])
</script>