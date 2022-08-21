import React from 'react'
import CreateTodoButton from '../components/CreateTodoButton';
import Modal from '../components/Modal';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import { TodoContext } from '../TodoContext/TodoContext';
import TodoForm from '../components/TodoForm';
import TodoStatus from '../components/TodoStatus';
import '../styles/App.css';


export default function App() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, } = React.useContext(TodoContext)
  return (
    <div className='App-container'>
      <div className='App-todo'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>Loading...</p>}
          {(!loading && !searchedTodos.length) && <TodoStatus/>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
      </div>
    </div>
  )
}
