import React from 'react'
import CreateTodoButton from '../components/CreateTodoButton';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import '../styles/Home.css'

export default function () {
    const todos = [
        { text: 'Cortar cebolla', completed: true },
        { text: 'Tormar el curso de intro a react', completed: false },
        { text: 'Llorar con la llorona', completed: false }
    ];
    return (
        <div className='App-container'>
            <div className='App-todo'>
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {todos.map(todo => (
                        <TodoItem 
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        />
                    ))}
                </TodoList>
                <CreateTodoButton />
            </div>
            
        </div>
    )
}
