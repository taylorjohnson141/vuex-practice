<template>
  <div class="container">
    <div v-for= "todo in getToDos" :key ="todo.title">
      {{todo.title}}
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
  }
}

</script>

<style>

</style>