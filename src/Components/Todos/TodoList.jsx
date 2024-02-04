import React from 'react'
import Todo from './Todo'

const TodoList = ({todo, filteredData}) => {  

  return (
    <div className="flex flex-col gap-3">
      {filteredData.length > 0? filteredData?.map((item)=>{
        return <Todo item={item}/>
      })
      : todo?.map((item)=>{
        return <Todo  item={item}/>
      })}
      
    </div>
  
    
  )
}

export default TodoList
