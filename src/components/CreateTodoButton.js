import React from 'react'
import '../styles/CreateTodoButton.css'
export default function CreateTodoButton() {
    return (
        <>
            <button class="CreateTodoButton add-btn">
                <div class="add-icon"></div>
                <div class="btn-txt">Agregar tarea</div>
            </button>
        </>
    )
}
