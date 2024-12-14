import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
  
    const { handleAddTodos, todoValue, setTodoValue} = props 
    
    return (
    <header className=''>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} type="text" placeholder='Enter todo....' />
        <button onClick={()=> {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add Todo</button>
    </header>
  )
}
