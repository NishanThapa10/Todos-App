import React, { createContext } from 'react'
import { useState } from 'react'
import TodoInput from '../Components/TodoInput'
import TodoContainer from '../Components/Todos/TodoContainer'


export const ReloadContext = createContext();

function TodoPage() {
  const [reload, setReload] = useState(false);

  const reloadData = {
    reload,
    setReload,
  };

  return (
    <ReloadContext.Provider value={reloadData}>
      <div className='max-w-[76rem] mx-auto mt-10'>
      <h1 className='text-center font-medium text-2xl mb-5'>Enter Todos here:</h1>
    <TodoInput />
    <TodoContainer/>
    </div>
    </ReloadContext.Provider>
    
  
  )
}

export default TodoPage