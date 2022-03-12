// noinspection SpellCheckingInspection
import {createApp} from 'vue'
//import { createApp } from 'vue/dist/vue.esm-bundler';
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'

// Optional, since every component import their Bootstrap funcionality
// the following line is not necessary
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/main.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
