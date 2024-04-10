import "bootstrap/dist/css/bootstrap.min.css"
import './assets/main.css'
import "./assets/font-awesome.min.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';


import App from './App.vue'
import router from './router'
import axios from 'axios';
import { useAuthStore } from './stores/auth';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App)
app.use(createPinia())
// const auth = useAuthStore()
// auth.refreshToken()

app.component("VueApexCharts", VueApexCharts);
app.use(router)
app.use(PrimeVue)
app.mount('#app')

