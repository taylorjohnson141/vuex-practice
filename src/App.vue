<template>
  <AddToDo/>
  <ToDos/>
</template>

<script>
import AddToDo from "./components/AddToDo.vue"
import ToDos from "./components/ToDos"
export default {
  name: 'App',
  components: {
    ToDos,AddToDo
  }
}
</script>

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
