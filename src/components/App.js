import React, { useCallback, useState } from 'react';
import './App.css';
import List from './TodoList/List';
import TodosCompleted from './TodoList/TodosCompleted';
import Header from './Header';

function App() {
  const [todos, setTodos] = useState([]);
  
  const handleSetTodos = useCallback((name) => {
    setTodos([...todos, {
      name,
      checked: false,
    }]);
  }, [todos]);
  
  const handleChecked = useCallback((name) => {
    setTodos(
      todos.map((item) => {
        if ( item.name === name ) {
          return {...item, checked: !item.checked};
        }
        return item;
      })
    );
  }, [todos]);
  
  const handleRemoveTodos = useCallback((name) => {
    setTodos(todos.filter(({name: todoName}) => todoName !== name));
  }, [todos]);
  
  return (
    <>
      <Header onSetTodos={handleSetTodos} todos={todos}/>
      <div className="container">
        <List todos={todos} onRemoveTodos={handleRemoveTodos} onChecked={handleChecked}/>
        <TodosCompleted todos={todos} onRemoveTodos={handleRemoveTodos} onChecked={handleChecked}/>
      </div>
    </>
  );
}

export default App;
