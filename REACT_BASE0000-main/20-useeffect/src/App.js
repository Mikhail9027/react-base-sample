import {useState} from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
const[todo, setTodo] = useState(null);
useEffect(() => {
console.log('Callback in useEffect called');
fetch('https://jsonplaceholder.typicode.com/todos/3')
.then((response) => response.json())
.then((json) => setTodo(json));

}, []);
console.log('App render');
console.log(todo);


  return  <div className="App">{todo && <h1>{todo.titlee}</h1>}</
  div>;
  }


export default App;
