import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();
function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error, } = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    if (!searchedTodos >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    };
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newtodos = [...todos];
        newtodos[todoIndex].completed = true;
        saveTodos(newtodos);
    };
    const deleteTodo = (text) => {
        const newtodos = todos.filter(todo => todo.text !== text)
        saveTodos(newtodos);
    };
    const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            completed:  false,
            text,
        });
        saveTodos(newTodos);
    }
    return ( 
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            error,
            loading,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            saveTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider };
