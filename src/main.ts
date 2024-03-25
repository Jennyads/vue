import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'


axios.defaults.baseURL = 'https://8080-jennyads-springboot-1whre140k8v.ws-us110.gitpod.io/';
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
