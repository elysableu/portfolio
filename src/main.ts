import './assets/styles/base.css'
import './assets/styles/main.css'

import './assets/fonts/fonts.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
