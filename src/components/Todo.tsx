import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props{
   todo:TodoType;
  index:number;
  handleCompleted : (id:number)=>void
    handleDelete : (id:number)=>void
}

const Todo:React.FC<Props> = ({todo,index,handleCompleted,handleDelete})=>{
   return (<div className="todo" style={{ textDecoration:todo.completed ? 'line-through' : ''}}> {todo.title}
   <button onClick={()=> handleCompleted(index)}>{todo.completed ? 'Incomplete' : 'Complete'}</button>
   <button onClick={()=>{handleDelete(index)}}>Delete</button></div>)
}
export default Todo;