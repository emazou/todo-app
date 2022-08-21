import React from 'react'
import '../styles/CreateTodoButton.css'
export default function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            Crear To-Do
        </button>
    )
}
