import { useCallback } from "react";

const Todo = ( {name, onRemoveTodos, onChecked} ) => {
  const handleRemoveTodos = useCallback( ( name ) => {
    onRemoveTodos( name );
  }, [onRemoveTodos] );
  const handleChecked = useCallback( ( name ) => {
    onChecked( name );
  }, [onChecked] )
  
  return (
    <li className='todo-item'>
      <span>{ name }</span>
      <div className="todo-buttons">
        <button onClick={ ( e ) => handleRemoveTodos( name ) } className="todo-remove"/>
        <button onClick={ ( e ) => handleChecked( name ) } className="todo-complete"/>
      </div>
    </li>
  )
};

export default Todo