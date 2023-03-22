import React from 'react'
import Todo from './Todo'

export default function Todolist({ todos, deleteTodo }) {
    return (
        <ul className="w-full px-4 md:px-0 md:w-3/4 mx-auto mt-6 text-left">
            <Todo todos={todos} deleteTodo={deleteTodo}/>
        </ul>
    )
}
