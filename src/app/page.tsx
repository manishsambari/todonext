"use client"

import { FormEvent, useState } from "react";

const Addtodo = () => {
  const [todo, setTodo] = useState("");

  const handleformsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo(value:"")

  }
  return (
    <form onSubmit={handleformsubmit}>
      <input type="text" placeholder="Add a new todo" name="" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default Addtodo