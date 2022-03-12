<template style="display:inline-block;">
    <b-nav-item v-if="error">Oops! Error Occurred.</b-nav-item>
    <div v-else-if="data">
      <p v-if="data.length === 0">No classes found.</p>
      <b-nav-text>
        Classes
      </b-nav-text>
      <b-nav-item href="#" class="nav-item-hover text-decoration-none" style="text-align: left" v-on:click="app.state = `class-${course.periodID}`" @click.prevent="console.log(this)" v-for="course in data" v-bind:key="course">
        {{course.courseName}}</b-nav-item>
    </div>
    <b-spinner label="Spinning" v-else></b-spinner>
</template>

<script setup>
import { useFetch } from './useFetch.js'
const { data, error } = useFetch('https://hmbhs.schoolloop.com/mapi/report_card?studentID=1593846838236')
if (error) data.length = 0
import { app } from '../store.js'
app.classes = data
console.log(data)
</script>

<script>
export default {
  name: "classList"
}
</script>