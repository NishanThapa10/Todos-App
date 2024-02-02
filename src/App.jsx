import { useState } from 'react'              
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoPage from './Pages/TodoPage'
import TodoEdit from './Pages/TodoEdit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
/>




    <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoPage/>} />
      <Route path="todos/:id" element={<TodoEdit/>}/>
    </Routes>
    </BrowserRouter>
  </>


  )
}

export default App
