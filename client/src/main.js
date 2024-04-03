import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';


import App from './App.vue'
import router from './router'
import axios from 'axios';
import { useAuthStore } from './stores/auth';

const app = createApp(App)

export const server = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/"
})


import VueApexCharts from 'vue3-apexcharts';
app.use(createPinia())
// const auth = useAuthStore()
// auth.loginWithToken()

app.component("VueApexCharts", VueApexCharts);
app.use(router)
app.use(PrimeVue)
app.mount('#app')
