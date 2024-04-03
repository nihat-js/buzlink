<template>
  <div class="min-h-screen bg-gray-100 p-8">

    <!-- Dashboard Header -->
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-gray-700">URL Shortener Dashboard</h1>
    </div>


    <!-- Table -->
    <div class="bg-white shadow rounded-lg p-4 mb-4">
      <div class="flex flex-col items-center justify-center py-8">
        <div class="shadow-lg rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Original URL
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Shortened URL
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date Created
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Clicks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in  urlData " :key="data.id" class="hover:bg-gray-100">
                <td @click="selectedURL = selectedURL == data.id ? null : data.id"
                  class="px-5 py-5 border-b border-gray-200  text-sm"
                  :class="[selectedURL == data.id ? 'bg-gray-600' : 'bg-gray-100']">

                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ data.originalUrl }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ data.shortenedUrl }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ data.dateCreated }}</p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">{{ data.clicks }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>



    <!-- Stats Cards -->
    <div v-if="selectedURL" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <!-- Card Component -->
      <div class="bg-white shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Total URLs</h2>
            <p class="text-gray-500">Number of shortened URLs</p>
          </div>
          <div class="text-3xl font-bold text-green-500">150</div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Total URLs</h2>
            <p class="text-gray-500">Number of shortened URLs</p>
          </div>
          <div class="text-3xl font-bold text-green-500">150</div>
        </div>
      </div>
      <div class="bg-white shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-700">Total URLs</h2>
            <p class="text-gray-500">Number of shortened URLs</p>
          </div>
          <div class="text-3xl font-bold text-green-500">150</div>
        </div>
      </div>

    </div>




    <!-- Charts -->
    <div v-if="selectedURL" class="grid grid-cols-1 justify-content-between gap-4">
      <!-- Chart Component -->
      <div class="bg-white shadow rounded-lg p-4 flex ">
        <!-- <line-chart :data="clicksChartData"></line-chart> -->
        <VueApexCharts width="380" type="donut" :options="options" :series="options.series"></VueApexCharts>
        <hr>
        <VueApexCharts width="380" type="pie" :options="options" :series="options.series"></VueApexCharts>
      </div>
      <!-- Repeat for other charts -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedURL = ref(null)
const urlData = [
  { id: 1, originalUrl: 'https://example.com/very/long/url', shortenedUrl: 'https://short.url/abc123', dateCreated: '2024-04-01', clicks: 150 },
  { id: 2, originalUrl: 'https://anotherexample.com/pages/12345', shortenedUrl: 'https://short.url/def456', dateCreated: '2024-04-02', clicks: 75 },
]
const options = {
  series: [10, 20, 30],
  labels: ['Apple', 'Mango', 'Orange']
}

watch(
  // Specify the state variable to watch
  () => selectedURL.value,
  // Callback function to execute when the state variable changes
  (newValue, oldValue) => {
    // Trigger data fetching logic whenever the state variable changes
    console.log({ newValue, oldValue })
    // fetchData();
  }
);
</script>
