import { useCallback } from 'react';

const Todo = ({name, onRemoveTodos, onChecked}) => {
  const handleRemoveTodos = useCallback(() => {
    onRemoveTodos(name);
  }, [name, onRemoveTodos]);
  
  const handleChecked = useCallback(() => {
    onChecked(name);
  }, [name, onChecked]);
  
  return (
    <li className='todo-item'>
      <span>{name}</span>
      <div className="todo-buttons">
        <button onClick={handleRemoveTodos} className="todo-remove"/>
        <button onClick={handleChecked} className="todo-complete"/>
      </div>
    </li>
  )
};

export default Todo
