import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import * as Router from 'vue-router'
import Home from './components/Home.vue'
import Stack from './components/Stack.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/stack', component: Stack }
]

const router = Router.createRouter({
    history: Router.createWebHashHistory(),
    routes // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
