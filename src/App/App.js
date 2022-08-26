import React from 'react'
import CreateTodoButton from '../components/CreateTodoButton';
import Modal from '../components/Modal';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import { useTodos } from './useTodos';
import TodoForm from '../components/TodoForm';
import TodoStatus from '../components/TodoStatus';
import '../styles/App.css';
import TodoLoading from '../components/TodoLoading';
import TodoError from '../components/TodoError';
import SearchResults from '../components/SearchResults';

export default function App() {
  const { 
    error,
    loading,
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal, 
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
  } = useTodos()
  return (
    <div className='App-container'>
      <div className='App-todo'>
        <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
        />
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
        />
        <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={()=> <TodoError/>}
        onLoading={()=> <TodoLoading loading={loading} />}
        onEmptyTodos={()=> <TodoStatus/>}
        onEmptySearchResults={(searchText)=> <SearchResults text={searchText}/>}>
        {
          todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )
        }
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm
            addTodo ={addTodo}
            setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton
        setOpenModal={setOpenModal}
        />
      </div>
    </div>
  )
}
