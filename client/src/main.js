import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';


import App from './App.vue'
import router from './router'
import axios from 'axios';

const app = createApp(App)

export const server = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3000/"
})


app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
