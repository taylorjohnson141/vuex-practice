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
    },
    deleteToDo({commit},todo){
      commit('deleteToDo',todo)
    }
  },
  mutations: {
    newToDo(state,newTodo){
      if(!state.todos.find(todo => todo.title === newTodo)){
        state.todos.unshift({title:newTodo, completed:false})
      }
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
