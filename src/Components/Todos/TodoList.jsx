import React, { useState, useEffect, useContext } from 'react'
import Todo from './Todo'
import {Axios} from '../../../api/server.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReloadContext } from '../../Pages/TodoPage';
import useAxiosCall from '../../hooks/useAxiosCall';

const TodoList = () => {  

  const {reload} = useContext(ReloadContext);
                                                                    
  const [data, setData] = useState([]);
  // const [reload, setReload] = useState(false);

  // useEffect(()=>{
  //   getAlllTodos();
  // },[reload]);

  const todo = useAxiosCall("todos",reload);

  // const getAlllTodos = async () => {
  //   try{
  //     const res = await Axios.get("todos");
  //     setData(res.data.reverse());
  //     setReload((prev)=>!prev);
  //   } catch (error){
  //     toast.error("error fetching todo.");
  //     // console.log(error);
  //   }
  // };



  return (
    <div className="flex flex-col gap-3">
      {todo?.map((item)=>{
        return <Todo  item={item}/>
      })}
      
    </div>
  
    
  )
}

export default TodoList
