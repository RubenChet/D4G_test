import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// add this
import './index.css'
import 'flowbite';
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
