import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = ({todo, index, onChange}) => {
  return (
    <div>
      <input type="checkbox" onChange={(e) => onChange(e, index)} /><span>{todo.text}</span>
    </div>
  )
}

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({
    text: "",
    isComplete: false
  })
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = e.target.checked;
    console.log(e.target.checked, index)
    setTodos(newTodos);
    // setIsChecked(e.target)
  };

  const handleInput = e => {
    setTodo({text: e.target.value, isComplete: isChecked})
  }

  const addTodo = e => {
    // setTodos(...todos, todo)
    // setTodos(todo)
    todos.push(todo)
  };

  const remove = () => {
    const newTodos = [...todos];
    newTodos.forEach(item => {
      console.log(item)
      newTodos.splice(item, 1)
    })
    setTodos(newTodos)
    // todos.forEach(item => {
    //   if (item.isComplete) {
    //     console.log(todos.indexOf(item))
    //     todos.splice(todos.indexOf(item), 1);
    //   }
    // })
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
    // todos.splice()
  }

  return (
    <div className="todo-container">
      <header>
        <h2>Todo List</h2>
        <input type="text" onChange={e => handleInput(e)} value={Object.entries(todo).length !== 0 && todo.name} /><button onClick={addTodo}>Add</button>
      </header>

      <div>
        {
          todos && todos.map((_todo, index) => (
            <ul className="todo-list">
              <li className="todo-item"><Todo key={index} index={index} todo={_todo} onChange={(e) => handleCheck(e, index)} /></li>
            </ul>
          ))
        }
      </div>

      <div>
        <button className="remove-button" onClick={remove}>remove completed</button>
      </div>
    </div>
  )


}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
