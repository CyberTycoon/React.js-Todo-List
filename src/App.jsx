import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
function App() {
  
  const [todoValue, setTodoValue] = useState('')
  const [todos, setTodos] = useState([])
   
   function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
   }

   function handleAddTodos(newTodo) {
     const newTodoList = [...todos, newTodo]
     persistData(newTodoList)
     setTodos(newTodoList)
   }

   function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) =>{
      return todoIndex!== index;
    })
    persistData(newTodoList)
    setTodos(newTodoList)
   }

   function handleEditTodo(index) {
     const valueToBeEdited = todos[index]
     setTodoValue(valueToBeEdited)
     handleDeleteTodo(index)
   }

   useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
   }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
