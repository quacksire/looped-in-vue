<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    <div v-if="data.length === 0">
      <p>No classes found.</p>
    </div>
    <div v-else>
      <h1>Classes</h1>
    </div>
    <b-list-group class="h-25">
      <b-list-group-item class="hover text-decoration-none" v-on:click="app.state = `class-${course.periodID}`" @click.prevent="console.log(this)" v-for="course in data" v-bind:key="course">
        <h5 class="mb-1"> <a href="#" class="text-decoration-none">{{course.courseName}} </a></h5>
      </b-list-group-item>
      <b-list-group-item class="hover text-decoration-none text-black" href="#" v-if="app.state !== 'home'" @click.prevent="app.back()">Homework</b-list-group-item>
    </b-list-group>
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
</template>


<script setup>
import { useFetch } from './useFetch.js'
const { data, error } = useFetch('https://hmbhs.schoolloop.com/mapi/report_card?studentID=1593846838236')
import { app } from '../store.js'
app.classes = data
console.log(data)
</script>

<script>
export default {
  name: "classList"
}
</script>

<style scoped>
.hover:hover {
  background: lightblue;
  text-color: white;
}

</style>