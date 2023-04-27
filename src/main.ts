import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import routes from '@/routes'

const app = createApp(App)

// MIDDLEWARE
app.use(routes)
app.use(createPinia())

app.mount('#app')
