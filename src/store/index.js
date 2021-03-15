import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[{
      title:"something",
    },{
      title:"else"
    }]
  },
  actions: {
    addToDo({commit},todo){
      commit('newToDo',todo)
    }
  },
  mutations: {
    newToDo(state,newTodo){
      state.todos.unshift(newTodo)
    } 
  },
  getters:{
    getToDos:(state) =>{
      return state.todos
    }
  },
  modules: {
  }
})
