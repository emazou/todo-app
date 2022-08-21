import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext'

export default function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
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
        <form onSubmit={onSubmit}>
            <label>Agregar TODO</label>
            <input
            type='text'
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Agrega un TODO"
                    required
                />
            <div>
                <button
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}
