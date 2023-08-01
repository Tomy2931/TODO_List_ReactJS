import React from 'react'
import './TodoCount.css'
import { TodoContext } from '../TodoContext'

function TodoCount(){
  const {completedTodos,totalTodos,allCompleted,loading} =  React.useContext(TodoContext)
    return(
      <div>
        
        <h1 className={`todoCount-text incompleted ${!loading && allCompleted == undefined && "completed"}`}>Aún no agregaste TODOS</h1>


        <h1 className={`todoCount-text incompleted ${!loading && allCompleted && "completed"}`}>¡Completaste todos los TODOS!</h1>

        <h1 className={`todoCount-text ${!loading && allCompleted && "incompleted" || allCompleted == undefined && "incompleted"  }`}>
          Has completado <span className='todoCount-num'>{completedTodos}</span> de <span className='todoCount-num'>{totalTodos}</span> TODOS
        </h1>

        <h1 className={`todoCount-text incompleted ${loading && "completed"}`}>Cargando, espere...</h1>

        <img  className={`flechita incompleted ${!loading && allCompleted == undefined && "completed"}`}
        
        src="https://cdn-icons-png.flaticon.com/512/786/786401.png" alt="flecha ayuda"
        />

      </div>
    )
  }

{/* <p className={`item-text ${props.completed && "item-text--active"} `}>{props.text} </p> */}
        



export { TodoCount }