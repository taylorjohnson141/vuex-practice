<template>
  <form>
    <input type="text" v-model= "idea">
    <button @click = "submitIdea" >Add Idea</button>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      idea:""
    }
  },
  methods:{
    ...mapActions([
      'addToDo']),
    
      submitIdea(e){
        e.preventDefault()
        this.addToDo(this.idea)
        this.idea = ''
      }
  }
}
</script>

<style>

</style>