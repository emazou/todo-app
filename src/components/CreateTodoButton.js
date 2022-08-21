import React from 'react'
import '../styles/CreateTodoButton.css'
export default function CreateTodoButton(props) {
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <>
            <button 
                className="CreateTodoButton CreateTodoButton-add-btn"
                onClick={onClickButton}
            >
                <div className="CreateTodoButton-add-icon"></div>
                <div className="CreateTodoButton-btn-txt">Agregar tarea</div>
            </button>
        </>
    )
}
