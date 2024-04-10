<template>
  <Nav />
  <div class="min-h-screen  bg-gray-100 p-8">
    <div style="max-width: 1100px;" class="mx-auto">

      <!-- Header -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-gray-700">URL Shortener Dashboard</h1>
      </div>




      <div class="flex items-center my-5">
        <span class="text-gray-500 mr-2">https://</span>
        <input type="text" v-model="destinationURL"
          class="flex-1 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter URL...">
        <button @click="shortenUrl"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">Shorten
          URL</button>
      </div>
      <button class="bg-blue-700 text-white  text-sm py-2 px-2 border-r flex gap-2 items-center"
        @click="showAdvancedSettings = !showAdvancedSettings">
        Advanced Settings
        <img src="@/assets/arrow-up.svg" alt="Arrow Up" v-if="showAdvancedSettings" width="16px">
        <img src="@/assets/arrow-down.svg" alt="Arrow Down" width="16px" v-else>

      </button>
      <br><br>
      <!-- Advanced settings -->
      <div v-if="showAdvancedSettings" class="grid grid-cols-2 my-3">
        <div class="">
          <h3 class="text-lg font-semibold mb-2">Password Protection</h3>
          <p class="text-sm mb-4">By adding a password, you can restrict access.</p>
          <div class="flex items-center">
            <span class="inline-block h-8 w-8 rounded-md bg-gray-200 flex items-center justify-center">
              <img src="@/assets/key.svg" />
            </span>
            <input type="password" class="form-input ml-2 w-full" name="password" id="pass"
              placeholder="Enter password">
          </div>
        </div>

        <div class="">
          <h3 class="text-lg font-semibold mb-2">Clicking Limit</h3>
          <p class="text-sm mb-4">Set a limit on the number of clicks allowed.</p>
          <div class="flex items-center">
            <span class="h-8 w-8 rounded-md bg-gray-200 flex items-center justify-center">
              <img src="@/assets/limit.svg" class="text-gray-600 fas fa-mouse-pointer"></img>
            </span>
            <input type="number" class="form-input ml-2 w-full" name="click_limit" placeholder="Enter click limit">
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Expiration Date</h3>
          <p class="text-sm mb-4">Set a date for the link to expire.</p>
          <div class="flex items-center">
            <span class="inline-block h-8 w-8 rounded-md bg-gray-200 flex items-center justify-center">
              <img src="@/assets/date.svg" class="text-gray-600 fas fa-calendar-alt"></img>
            </span>
            <input type="date" class="form-input ml-2 w-full" name="expiration_date">
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Custom Alias</h3>
          <p class="text-sm mb-4">Create a custom alias for your link.</p>
          <div class="flex items-center">
            <span class=" h-8 w-8 rounded-md bg-gray-200 flex items-center justify-center">
              <img src="@/assets/link.svg" class="text-gray-600 fas fa-link"></img>
            </span>
            <input type="text" class="form-input ml-2 w-full" name="custom_alias" placeholder="Enter custom alias">
          </div>
        </div>
      </div>
    </div>
    <Loading :loading="loading" />
    <table v-if="data?.data?.length" style="width:100%" class="bg-slate-300 leading-normal">
      <thead>
        <tr>
          <th
            class="px-2 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Original URL
          </th>
          <th
            class="px-2 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Shortened URL
          </th>
          <th
            class="px-2 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Created
          </th>
          <th
            class="px-2 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Clicks
          </th>
          <th
            class="px-2 py-1 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in data.data" :key="data.id" class="hover:bg-gray-100">
          <td @click="selectedURL = selectedURL == data.id ? null : data.id"
            class="px-2 py-1 border-b border-gray-200  text-sm"
            :class="[selectedURL == data.id ? 'bg-gray-600' : '']">
            <div class="flex items-center">
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ data.destinationURL }}
                </p>
              </div>
            </div>
          </td>
          <td class="px-2 py-2 border-b border-gray-200  text-sm flex gap-2">
            <p class="text-gray-900 whitespace-no-wrap">{{ data.shortenedURL }}</p>
            <CopyButton :text="`/l/{data.shortenedURL}`" />
          </td>
          <td class="px-2 py-2 border-b border-gray-200  text-sm">
            <p class="text-gray-900 whitespace-no-wrap">{{ data.clicks }}</p>
          </td>
          <td class="px-2 py-2 border-b border-gray-200  text-sm">
            <p class="text-gray-900 whitespace-no-wrap">{{ data.createdAt }}</p>
          </td>
          <td>
            <button @click="edit"
              class=" bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-3 py-2 rounded-md transition duration-300">
              <img src="@/assets/edit.svg" width="16px" />
            </button>
            <button @click="viewStats"
              class="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded-md transition duration-300">
              <img src="@/assets/stats.svg" width="16px" />
            </button>
            <button @click="remove"
              class="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded-md transition duration-300">
              <img src="@/assets/delete.svg" width="16px" />
            </button>
          
          </td>
        </tr>
      </tbody>
    </table>




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
import Nav from '@/components/user/Nav.vue';
import Loading from "@/components/common/Loading.vue"
import CopyButton from "@/components/common/CopyButton.vue"

import useAxios from '@/composables/useAxios';
import instance from '@/services/api';
import { ref, } from 'vue';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const destinationURL = ref("")
const selectedURL = ref("")
const showAdvancedSettings = ref(false)

const { loading, error, data, exec } = useAxios()
exec("get", "/urls")

async function shortenUrl() {
  const urlRegex = /([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
  if (!urlRegex.test(destinationURL.value)) {
    console.log("Not valid URL: " + destinationURL.value)
    return;
  }
  let res = await instance.post("/urls", {
    destinationURL: destinationURL.value,
  })
  if (res.status === 200) {
    exec("get", "/urls")
  }
  // console.log(res)
}

const isExpanded = ref(false);
const useCustomUrl = ref(false);

const toggleSettings = () => {
  isExpanded.value = !isExpanded.value;
};
// const selectedURL = ref(null)
const options = {
  series: [10, 20, 30],
  labels: ['Apple', 'Mango', 'Orange']
}



</script>
