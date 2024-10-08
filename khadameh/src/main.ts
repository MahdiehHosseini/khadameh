import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
