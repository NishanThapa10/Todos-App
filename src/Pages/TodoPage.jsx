import React from 'react'
import { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoContainer from '../Components/Todos/TodoContainer'

function TodoPage() {
  const [reload, setReload] = useState(false);
  return (
    
    <div className='max-w-[76rem] mx-auto mt-10'>
      <h1 className='text-center font-medium text-2xl mb-5'>Enter Todos here:</h1>
    <TodoInput setReload={setReload}/>
    <TodoContainer setReload={setReload} reload={reload}/>
    </div>
  
  )
}

export default TodoPage