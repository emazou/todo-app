import React from 'react'
import '../styles/TodoList.css'
export default function TodoList(props) {
    return (
        <>
            <section className='TodoList-container'>
                <ul>
                    {props.children}
                </ul>
            </section>
        </>
    )
}
