import { createApp } from 'vue'
import App from './App.vue'
import * as Router from 'vue-router'
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
import Stack from './components/Stack.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/stack', component: Stack },
]

const router = Router.createRouter({
    history: Router.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

createApp(App).use(router).mount('#app')
