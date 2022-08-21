import React from 'react'
import '../styles/CreateTodoButton.css'
export default function CreateTodoButton() {
    const onClickButton = (msg)=>{
        alert(msg)
    }
    return (
        <>
            <button 
                className="CreateTodoButton CreateTodoButton-add-btn"
                onClick={()=>onClickButton('Futuro modal')}
            >
                <div className="CreateTodoButton-add-icon"></div>
                <div className="CreateTodoButton-btn-txt">Agregar tarea</div>
            </button>
        </>
    )
}
