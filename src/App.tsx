import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm'
import './App.css'
import Loader from './components/Loader';
interface Todo {
  title: string;
  id: number;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [err, setError] = useState({});

  const handleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
const handleDelete = (index:number)=>{
  const newTodos = [...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
}
const handleOnSubmit = (value:string)=>{
  setTodos ([...todos,{title:value,id:todos.length +1, completed:false}])
}
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((res) => setTodos(res))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  return (
    <div className="App">
      {todos.length > 0
        ? todos.map((todo: Todo, index) => (
           <Todo key={todo.id} todo={todo} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete} />

          ))
        : (<Loader/>)}
        <TodoForm handleOnSubmit={handleOnSubmit}/>
    </div>
  );
}

export default App;
