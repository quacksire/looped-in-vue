<script>
import ClassViewer from './components/classViewer.vue';
import sidebar from './components/sidebar.vue';
import homeworkList from "./components/homeworkList";
import { app } from './store.js'

console.log(app.state)
export default {
  components: {
    sidebar,
    homeworkList,
    ClassViewer
  },
  data() {
    return {
      app
    }
  },
}

</script>
<template>
  <b-container fluid>
    <b-row>
      <sidebar></sidebar>
      <main class="col-md-9 ms-sm-auto col-lg-10 min-vh-100">
        <homeworkList v-if="app.state === 'home'"/>
        <div v-for="course in app.classes" v-bind:key="course">
          <classViewer v-if="app.state === `class-${course.periodID}`" :period="course.periodID"></classViewer>
        </div>
      </main>
    </b-row>
  </b-container>
<!--
  <b-container>
    <b-row>
      <b-col cols="12" md="6">
        <ClassList></ClassList>
      </b-col>
      <b-col cols="12" md="6">
        <b-container style="overflow-y:scroll;height: 100vh;">

        </b-container>
      </b-col>
    </b-row>
  </b-container>
  -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
