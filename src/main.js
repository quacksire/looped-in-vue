// noinspection SpellCheckingInspection
import {createApp} from 'vue'
//import { createApp } from 'vue/dist/vue.esm-bundler';
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import * as VueRouter from 'vue-router'

// Optional, since every component import their Bootstrap funcionality
// the following line is not necessary
// import 'bootstrap'
const classList = { template: './components/classList' }
const viewClass = { template: './components/classViewer' }

const routes = [
    { path: '/', component: classList, name: "Home" },
    { path: '/class', component: viewClass, name: "ViewClass", props: true},
    { path: '/class/:id', component: viewClass, name: "ViewClass", props: true}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
