import { createApp } from 'vue'
import App from './App.vue'

// custom css
import '@/styles/index.scss'

// uno.css
import 'virtual:uno.css'

// router
import router from '@/router/index'

// pinia
import pinia from '@/store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // dark
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // icon

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
