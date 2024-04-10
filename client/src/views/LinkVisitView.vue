<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-semibold mb-4">Shortened Links</h1>
      <div v-if="loading" class="flex items-center justify-center">
        <svg class="animate-spin h-8 w-8 mr-3 text-gray-500" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a4 4 0 10-3.218 6.38l1.5 1.5A6 6 0 0110 18v-4a4 4 0 00-4-4H2v4.291z"></path>
        </svg>
        <span class="text-gray-500">Loading...</span>
      </div>
      <div v-else>
        <div v-if="links.length === 0" class="text-center text-gray-500">No shortened links available</div>
        <div v-else>
          <ul class="space-y-4">
            <li v-for="link in links" :key="link.id" class="border border-gray-200 rounded-md overflow-hidden">
              <div class="flex items-center justify-between p-4">
                <div>
                  <h2 class="text-lg font-semibold">{{ link.alias }}</h2>
                  <p class="text-sm text-gray-500">{{ link.destination }}</p>
                </div>
                <button @click="redirectToDestination(link)" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Go</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      links: [
        { id: 1, alias: 'example', destination: 'https://example.com' },
        { id: 2, alias: 'google', destination: 'https://google.com' },
        { id: 3, alias: 'facebook', destination: 'https://facebook.com' }
      ]
    };
  },
  methods: {
    redirectToDestination(link) {
      this.loading = true;
      setTimeout(() => {
        window.location.href = link.destination;
      }, 5000);
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Simulating API call delay
  }
};
</script>

<style>
/* You can add custom styles here */
</style>
