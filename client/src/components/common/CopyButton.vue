<template>
  <button @click="copyToClipboard"
    class="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-sexsmibold px-2 py-1 rounded-md transition duration-300"
    :class="[copied ? 'opacity-50' : 'opacity-100']">
    <img src="@/assets/copy.svg" width="16px" />
    <!-- <span style="font-size: 12px;" v-if="copied">Copied!</span> -->
  </button>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps(["text"])
const copied = ref(false)

function copyToClipboard() {
  const el = document.createElement('textarea')
  el.value = props.vlaue
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<style>
/* You can add animation styles here */
</style>
