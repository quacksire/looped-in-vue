<template>
  <b-nav class="sidebar">
    <b-nav-item style="display:inline-block;" class="nav-item-hover text-decoration-none" href="#" @click.prevent="app.state = 'hw'">Homework</b-nav-item>
    <class-list></class-list>
  </b-nav>
</template>


<script setup>
//import { app } from '../store.js'
</script>

<script>
import classList from "@/components/classList";
export default {
  name: "sideBar",
  components: {
    classList
  },
}
</script>