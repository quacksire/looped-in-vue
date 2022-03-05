<script setup>
import { app } from '../store.js'
import { useFetch } from './useFetch.js'
const { data, error } = useFetch('https://hmbhs.schoolloop.com/mapi/assignments?studentID=1593846838236')
app.homework = data
console.log(data)
</script>



<template id="homeworkList" style="overflow-y:scroll; height: 100%">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data" >
    <div v-if="data.length === 0">
      <p>No homework found.</p>
    </div>
    <div v-else>
      <h1>Homework</h1>
    </div>
    <b-list-group>
      <b-list-group-item href="#" class="flex-column align-items-start" v-for="homework in data" v-bind:key="homework">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{homework.title}}</h5>
          <small>{{ new Date(parseInt(String(homework.dueDate))).toLocaleDateString()}}</small>
        </div>
        <p class="mb-1" v-if="homework.description == 'null'">
        </p>
        <p class="mb-1" v-else>
          {{homework.description}}
        </p>
        <small>{{ homework.courseName }} - {{homework.teacherName}}</small>
      </b-list-group-item>
    </b-list-group>
  </div>
  <div v-else><b-spinner label="Spinning"></b-spinner></div>
</template>
<script>
export default {
  name: 'homeworkList'
  }
</script>