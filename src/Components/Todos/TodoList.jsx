import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import {Axios} from '../../../api/server.js'

const TodoList = ({reload, setReload}) => {                                                                      
  const [data, setData] = useState([]);
  // const [reload, setReload] = useState(false);

  useEffect(()=>{
    getAlllTodos();
  },[reload]);

  const getAlllTodos = async () => {
    try{
      const res = await Axios.get("todos");
      setData(res.data.reverse());
    } catch (error){
      console.log(error);
    }
  };



  return (
    <div className="flex flex-col gap-3">
      {data.map((item)=>{
        return <Todo setReload={setReload} item={item}/>
      })}
    </div>
  
    
  )
}

export default TodoList
