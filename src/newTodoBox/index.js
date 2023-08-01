import React from "react";
import './newTodoBox.css';
import { TodoContext } from "../TodoPropiedades/TodoContext";
function NewTodoBox(){
    const { addTodo,setOpenmodal}= React.useContext(TodoContext);

    const [newTodoInput, setnewTodoInput] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);


    const onSubmit = (event) => {
        if (newTodoInput === ""){
            setShowAlert(true);
        } else {
            addTodo(newTodoInput.trim());
            setOpenmodal(false);
        }
        event.preventDefault();
    }


    const onChange =  (event) => {
        setnewTodoInput(event.target.value)
    }

  
    const randomsTodos = [
        "Salvar al mundo","Caminar","Encontrar el One Piece","Pedir pizza","Limpiar el baño",
        "Organizar el armario","Armar un rompecabezas","¡Jugar Terraria!","Aprender a hacer origami","Comenzar a leer un nuevo libro","Comprar pan","Adoptar un perro","Adoptar un gato","Mirar una película","Reciclar (>‿◠)✌","Investigar sobre un tema interesante",
        "Cocinar una nueva receta","Ir a dar un paseo","Leer un capítulo de un libro","Aprender a programar","Comprar un juego","Juntar la ropa","Pasear con el perro"

    ]
   
    const textoRandom = () => {
        const randomNumber = Math.floor(Math.random() * randomsTodos.length);

        const textoRandom = randomsTodos[randomNumber];
        setnewTodoInput(textoRandom);
      };
    

    return(
        <div>
            <form className="principal"
        onSubmit={onSubmit}
            >
            <img className="dice-img" src="https://static.vecteezy.com/system/resources/previews/010/898/488/original/white-realistic-dice-png.png"
            
            onClick={textoRandom}
            
            />
            
            <h1 className="principal-h1">Escribe un nuevo TODO</h1>
            <input className="principal-text_box" placeholder="Sacar la basura ..."

                value={newTodoInput}
                onChange={onChange}
            />
            <div className="div_button_container">

                <button className="principal-acept_button" typeof="submit"
                    >Agregar</button>
                <button className="principal-cancel_button" type="button"

                    onClick={() => {setOpenmodal(false)}}

                >Cancelar</button>
            </div>,
            

            <div className={`alertEmpyValue  incompleted  ${showAlert && "completed" }`}            
            >
                <h1 className="alertText">¡No puedes agregar un TODO vacío!</h1>
            </div>
        </form>
        <iframe className='pikachu' src="https://giphy.com/embed/ge8V1m6LFNyBg9sIHV"  frameBorder="0" allowFullScreen></iframe>
        </div>

       
        
        



    )
}

export {NewTodoBox};