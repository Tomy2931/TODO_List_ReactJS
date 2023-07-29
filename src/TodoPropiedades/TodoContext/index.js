import React from "react";
import { useLocalStorage } from "./useLocalStorage"

const TodoContext =  React.createContext();

 
function TodoProvider ({ children }){

    const {
        item : todos,   //Variable con dos puntos para renombrarla/alias
        saveItem : saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_STORAGE', []);
    
      const [searchValue, setSearchValue] = React.useState('');
        
    
      const completedTodos = todos.filter(todo => (todo.completed)).length //Filtra los objetos del objeto todos que sean true, y recibe la cantidad con el length al final
                                        //todo sin s representa el iterable
    
      const filterTodos = todos.filter((todo) => {
        return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      })
    
      const checkTodo = (text) => {
        const newTodos= [...todos]; //Hace una copia de todos a newTodos
    
        const todoIndex = newTodos.findIndex( (todo) => todo.text == text); //Hacemos un find, pero solo devuelve su indice
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;  //Se establece con su valor invertido, t a f, o f a t
    
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
    
        const newTodos= [...todos];
    
        const todoIndex = newTodos.findIndex( (todo) => todo.text == text);
    
        newTodos.splice(todoIndex,1);
    
        saveTodos(newTodos);
      }
      
      let allCompleted
      const totalTodos = todos.length;
      if (totalTodos == 0){
        allCompleted = undefined
      }else {
        allCompleted = (completedTodos == totalTodos);
      }
    
    return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      allCompleted,
      filterTodos,
      checkTodo,
      deleteTodo,
      searchValue,
      setSearchValue,
    }}>
      { children }
    </TodoContext.Provider>

    )
}




export {TodoContext,TodoProvider,};