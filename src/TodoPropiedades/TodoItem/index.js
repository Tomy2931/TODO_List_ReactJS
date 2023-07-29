import './TodoItem.css'

function TodoItem(props){
    return(
      <li>
        <span className={`icon-check ${props.completed && "icon-check--active"} `}
        
        
        onClick={props.onComplete}
        
        >✓</span>

        <p className={`item-text ${props.completed && "item-text--active"} `}>{props.text} </p>
        
        <span className='borrar-item'
        
        onClick={props.onDelete}
        
        >✖</span>
      </li>
    )
  }

export { TodoItem } 