import { createApp } from 'vue'
import App from './App.vue'

// custom css
import '@/styles/index.scss'

// uno.css
import 'virtual:uno.css'

// router
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
