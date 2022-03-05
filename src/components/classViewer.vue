<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-if="data === null"><b-spinner label="Spinning"></b-spinner></div>
  <div v-else-if="data">
    <div class="sticky">
    <h2>{{data[0].course.name }}</h2>
    <h1 class="text-center">
      {{data[0].grade}}
    </h1>
    </div>
    <b-list-group v-for="grade in data[0].grades" v-bind:key="grade">
      <b-list-group-item class="list-group-item align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ grade.assignment.title }}</div>
          {{grade.assignment.categoryName}}
        </div>
        <span class="badge bg-primary rounded-pill">{{String(grade.percentScore).split('.')[0]}}%</span>
      </b-list-group-item>
    </b-list-group>
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
  <router-view />
</template>

<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({
  period: String,
});
const { period } = toRefs(props);
import { useFetch } from './useFetch.js'
const { data, error } = useFetch('https://hmbhs.schoolloop.com/mapi/progress_report?studentID=1593846838236&periodID=' + period.value)
console.log(data)
</script>
<script>
//import {toRefs} from "vue";
export default {
  name: "classViewer"
}
</script>