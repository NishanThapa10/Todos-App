import React, { useContext } from 'react'
import { useState } from 'react'
import useAxiosCall from '../../hooks/useAxiosCall'
import { ReloadContext } from '../../Pages/TodoPage'
import TodoButton from '../TodoButton'
import TodoList from './TodoList'

const TodoContainer = () =>{

  const [filteredData , setFilteredData] = useState([]);

  const {reload} = useContext(ReloadContext);

  const todo = useAxiosCall("todos",reload);


  const filterAll = () =>{
    setFilteredData(todo);
  }

  const filterDone = () =>{
    const data = todo?.filter((item) => item.completed);
    setFilteredData(data);
  }

  const filterTodo = () =>{
    const data = todo?.filter((item) => !item.completed);
    setFilteredData(data);
  }
  

  return(
    <div className='mt-8 flex flex-col gap-4 mb-[60px]'>
      <h1 className='text-center text-2xl font-medium'>To do List</h1>
      <div className='flex gap-2'>
        <TodoButton onClick={filterAll} text={"All"}/>
        <TodoButton onClick={filterDone} text={"Done"}/>
        <TodoButton onClick={filterTodo} text={"Todo"}/>

      </div>
      <TodoList todo={todo} filteredData={filteredData} />
    </div>
  )
}

export default TodoContainer