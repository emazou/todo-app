import React from 'react'
import '../styles/TodoList.css'
export default function TodoList(props) {
    const render = props.children
    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            <ul>
                {props.searchedTodos.map(render)}
            </ul>
        </section>
    )
}
