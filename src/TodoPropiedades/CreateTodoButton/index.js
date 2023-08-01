import react from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){
  const { openmodal,setOpenmodal}= react.useContext(TodoContext);
    return(
      <button className='addButton'

      onClick={() => {
        // if (openmodal==true){   //Se pregunta al estado por true o false
        //   setOpenmodal(false)
        // } else{setOpenmodal(true)} //Se actualiza mediante el actualizador de estado
        
          setOpenmodal(!openmodal)  //Version comprimida 
      }
        
      
     
        } 
        // else {setOpenmodal(true)}
        
      
    


      >+</button>
    )
  }

export { CreateTodoButton }