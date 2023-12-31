import '../App.css';
import React from 'react';
import { TodoCount } from '../TodoPropiedades/TodoCount';
import { TodoList } from '../TodoPropiedades/TodoList';
import { TodoSearch } from '../TodoPropiedades/TodoSearch';
import { TodoItem } from '../TodoPropiedades/TodoItem';
import { CreateTodoButton } from '../TodoPropiedades/CreateTodoButton';
import { TodosLoading } from '../TodoPropiedades/TodosLoading'
import { TodosError } from '../TodoPropiedades/TodosError'
import {TodoContext} from '../TodoPropiedades/TodoContext';
import { Modal } from '../Modal';
import { NewTodoBox } from '../newTodoBox';


let caca = true

function AppUI() {
  const {
    loading,
    error,
    filterTodos,
    checkTodo,
    deleteTodo,
    openmodal,
    allCompleted,
  } = React.useContext(TodoContext);
  
  return (
    <>
    <main>

        <h1 className='title'>Todo-List</h1>

        <TodoCount/>

      <div className='search-div'>

        <TodoSearch/> 

      </div> 

        <div className='list-div'>
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}

            {filterTodos.map(todo => 
            (<TodoItem  


            key={todo.text} 

            text={todo.text} 

            completed={todo.completed}

            onComplete={()=>checkTodo(todo.text)} //Se encapsula la funcion dentro de otra para que se ejecute solo si es llamada

            onDelete={()=>deleteTodo(todo.text)}

            />))}   
          </TodoList>
        </div>

        {!loading &&<CreateTodoButton/>}
        
        {openmodal && (
            <Modal>
            <NewTodoBox/>
            </Modal>
        )}
        </main>
    </>
  );
}




export { AppUI };