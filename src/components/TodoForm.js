import React from 'react'
import '../styles/TodoForm.css'
export default function TodoForm({ addTodo, setOpenModal } ) {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setOpenModal(false)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };
    return (
        <form 
        className='TodoForm-container'
        onSubmit={onSubmit}
        >
            <label 
            className='TodoForm-label'
            >Agregar TODO
            </label>
            <textarea
            className='TodoForm-textarea'
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="¿Qúe tienes por hacer?"
                    required
                />
            <div 
            className='TodoForm-buttons'
            >
                <button
                className='button-cancelar button'
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='button-agregar button'
                    type='submit'
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}
