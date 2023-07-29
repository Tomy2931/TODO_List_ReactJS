import React from "react";

function useLocalStorage(itemName,initialValue){

    const  [item,setItem] = React.useState(initialValue);
    const  [loading,setLoading] = React.useState(true);
    const  [error,setError] = React.useState(false);
    
    React.useEffect(() =>{
      setTimeout(() => {
        try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem
      if (!localStorageItem){   //Si está vacio
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue; 
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
      setLoading(false);
      } catch(error) {
        setError(true);
        setLoading(false);
      }
      }, 2000);
    }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    
    return {
      item,
      saveItem,
      loading,
      error};
  
  }

  export { useLocalStorage } 



  




// const defaultTodos = [
//   {text:'Hola', completed:false},
//   {text:'Caminar', completed:false},
//   {text:'Dormir', completed:false},
//   {text:'Comer', completed:false},
// ]

// function agregarItem(todo_text) {
//   const nuevoItem = {text:todo_text, completed:false} 
//   defaultTodos.push(nuevoItem)
// }
    
// localStorage.setItem('TODOS_STORAGE', JSON.stringify(defaultTodos));                   Agregar
// localStorage.getItem('TODOS_STORAGE');                                                 Mostrar
// localStorage.removeItem('TODOS_STORAGE');                                              Remover

// const stringTodosArray = JSON.stringify(defaultTodos)  //Pasando a string el array defaultTodos