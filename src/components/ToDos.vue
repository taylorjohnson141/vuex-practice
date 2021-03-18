<template>
  <div class="container">
    <div v-for= "todo in getToDos" :key ="todo.title">
      {{todo.title}}
      <button @click = "deleteToDo(todo)">Delete</button>
    </div>

  </div>
</template>

<script>
import {mapActions,mapGetters}  from "vuex"

export default {
  name:"ToDos",
  computed:{
     ...mapGetters([
      'getToDos',
    ])
  },
  methods:{
    ...mapActions([
      'deleteToDo']),
  }
}

</script>

<style>

</style>