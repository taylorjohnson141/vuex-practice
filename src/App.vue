<template>
  <AddTodo/>
  <ToDos/>
</template>

<script>
import AddTodo from "components/AddToDo.vue"
import ToDos from "components/AddToDo.vue"

export default {
  name: 'App',
  components: {
    AddTodo,ToDos
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
