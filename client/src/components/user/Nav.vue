<template>
  <nav class="bg-gray-800 text-white">
    <div style="max-width: 1200px;" class="container mx-auto px-6 py-3 flex justify-between items-center">
      <router-link class="text-xl font-semibold" to="/dashboard">BuzLink</router-link>

      <div class="flex items-center">
        <router-link to="/profile" class="px-5 py-2 rounded-md text-sm font-medium">Pricing</router-link>
        <div class="relative">
          <!-- Profile button with icon -->
          <button @click="toggleDropdown" class="flex items-center space-x-2 text-gray-700 focus:outline-none">
            <div class="h-8 w-8 rounded-full bg-gray-300"></div> <!-- Placeholder for profile icon -->
            <svg ref="btnDropdown" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div v-if="isDropdownOpen" ref="dropdown"
            class="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile </a>
            <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings
            </router-link>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
const isDropdownOpen = ref(false)
const dropdown = ref("dropdown")
const btnDropdown = ref("btnDropdown")

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
  if (isDropdownOpen.value) {
    document.addEventListener('click', closeDropdownOutside);
  } else {
    document.removeEventListener('click', closeDropdownOutside);
  }
}
function closeDropdownOutside(event) {
  if (!dropdown.value.contains(event.target) && !btnDropdown.value.contains(event.target)) {
    isDropdownOpen.value = false;
    document.removeEventListener('click', closeDropdownOutside);
  }
}
</script>
