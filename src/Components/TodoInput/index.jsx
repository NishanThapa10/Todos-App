import React, { useState } from 'react';
import { Axios } from '../../../api/server';
import TextInput from '../TextInput';
import TodoButton from '../TodoButton';

const TodoInput = ({setReload}) => {
  const [todoInput, setTodoInput] = useState(""); 
  
  const AddTodo = async () =>{
    try{
      await Axios.post("todos", {title: todoInput});
      setTodoInput("");
      setReload((prev)=>!prev);
    } catch (error){
      console.log(error);
    }
  };

  return (
    <div className="flex gap-3 flex-col border-solid border-[1px] border-[#000] py-3 px-6">
      <TextInput todoInput={todoInput} setTodoInput={setTodoInput} /> 
      <TodoButton onClick={AddTodo} text={"Add new task"} />
    </div>
  );
}

export default TodoInput;


