import { useCallback, useState } from "react";

function Header( {onSetTodos, todos} ) {
  const [value, setValue] = useState( '' );
  
  const handleSetTodos = useCallback( ( name ) => {
    const uniqTodo = !todos.find( ( {name: todoName} ) => todoName === name );
    
    if ( name && uniqTodo ) {
      onSetTodos( name );
    } else if ( !uniqTodo ) {
      alert( 'Эта задача уже существует!' );
    } else if ( !name ) {
      alert( 'Нельзя добавлять пустую задачу!' );
    }
    
    setValue( '' );
  }, [todos, onSetTodos] );
  
  const handleSetValue = useCallback( ( name ) => {
    setValue( name );
  }, [] );
  
  return (
    <header className="header">
      <form
        className="todo-control"
        onSubmit={ ( e ) => {
          e.preventDefault();
          handleSetTodos( value );
        } }
      >
        <label>
          <input
            value={ value }
            className="header-input"
            type="text"
            placeholder="Какие планы?"
            onChange={ e => handleSetValue( e.target.value ) }
          />
        </label>
        <button className="header-button" id="add"/>
      </form>
    </header>
  );
}

export default Header;