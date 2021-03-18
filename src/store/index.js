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
      console.log('here')
      commit('deleteToDo',todo)
    }
  },
  mutations: {
    newToDo(state,newTodo){
      if(!state.todos.find(todo => todo.title === newTodo)){
        state.todos.unshift({title:newTodo, completed:false})
      }
    },
    deleteToDo(state,todo){
      let todoTitle = state.todos.findIndex(CurrTodo => CurrTodo.title === todo.title )
       state.todos.splice(todoTitle,1)
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
