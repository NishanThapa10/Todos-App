import { useState } from 'react'              
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoPage from './Pages/TodoPage'
import TodoEdit from './Pages/TodoEdit'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoPage/>} />
      <Route path="todos/:id" element={<TodoEdit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
