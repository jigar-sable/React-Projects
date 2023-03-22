import React from 'react'

export default function Todo({ todos, deleteTodo }) {
    return (
        todos.map((todo)=>{
            return (
            <li className="bg-indigo-800 mb-3 shadow rounded flex items-center justify-between" key={todo.id}>
                <h2 className="ml-4">{todo.title}</h2>
                <button className="bg-red-600 hover:bg-red-700 px-6 rounded-r py-3 text-xl" onClick={()=>deleteTodo(todo.id)}><i className="text-white fas fa-trash-alt"></i></button>
            </li>
            )
        })   
    )
}
