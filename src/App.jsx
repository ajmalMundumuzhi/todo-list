import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const todos = ["Learn React", "Read Docs", "Build a Project"]
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoList tasks={todos} />
    </div>
  )
}

export default App
