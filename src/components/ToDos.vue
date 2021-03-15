<template>
  <div class="container">
    <div v-for="todo in todos" :key ="todo.title">
      {{todo.title}}
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"

export default {
  computed:{
     ...mapGetters([
      'getToDos',
    ])
  }
}

</script>

<style>

</style>