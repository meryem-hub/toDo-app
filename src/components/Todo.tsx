import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props{
   todo:TodoType;
  index:number;
  handleCompleted : (id:number)=>void
}

const Todo:React.FC<Props> = ({todo,index,handleCompleted})=>{
   return (<div className="todo" style={{ textDecoration:todo.completed ? 'line-through' : ''}}> {todo.title}
   <button onClick={()=> handleCompleted(index)}>{todo.completed ? 'Incomplete' : 'Complete'}</button></div>)
}
export default Todo