import React, { useState } from 'react'

export default function Inputbar({addTodo}) {

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }

    return (
        <form className="px-4 md:px-0 md:w-3/4 mx-auto flex justify-between items-center mt-6" onSubmit={(e)=>handleSubmit(e)}>
          <input className="border-2 flex-1 border-gray-500 bg-transparent p-2 rounded outline-none" required value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" name="todo" placeholder="Type a todo" />
          <button className="bg-indigo-600 hover:bg-indigo-700 ml-4 px-6 py-2.5 rounded shadow" type="submit">ADD</button>
        </form>
    )
}
