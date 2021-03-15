import { createStore } from 'vuex'

export default createStore({
  state: {
    todo:[{
      title:"something"
    }]
  },
  actions: {
    addToDo({commit},todo){
      commit('newToDo',todo)
    }
  },
  mutations: {
    newToDo(state,newTodo){
      state.todo.unshift(newTodo)
    } 
  },
  getters:{
    getToDos(){
      return state.todo
    }
  },
  modules: {
  }
})
