import React from 'react'
import './TodoCount.css'
import { TodoContext } from '../TodoContext'

function TodoCount(){
  const {completedTodos,totalTodos,allCompleted,loading} =  React.useContext(TodoContext)
    return(
      <div>
        
        <h1 className={`todoCount-text incompleted ${!loading && allCompleted == undefined && "completed"}`}>Aun no agregaste TODOS</h1>


        <h1 className={`todoCount-text incompleted ${!loading && allCompleted && "completed"}`}>¡Completaste todos los TODOS!</h1>

        <h1 className={`todoCount-text ${!loading && allCompleted && "incompleted" || allCompleted == undefined && "incompleted"  }`}>
          Has completado <span className='todoCount-num'>{completedTodos}</span> de <span className='todoCount-num'>{totalTodos}</span> TODOS
        </h1>

        <h1 className={`todoCount-text incompleted ${loading && "completed"}`}>Cargando, espere...</h1>

      </div>
    )
  }

{/* <p className={`item-text ${props.completed && "item-text--active"} `}>{props.text} </p> */}
        



export { TodoCount }