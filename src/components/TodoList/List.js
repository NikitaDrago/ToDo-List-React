import { useCallback } from "react";
import Todo from "./Todo";

const List = ( {todos, onRemoveTodos, onChecked} ) => {
  
  const handleRemoveTodos = useCallback( ( name ) => {
    onRemoveTodos( name );
  }, [onRemoveTodos] );
  
  const handleChecked = useCallback( ( name ) => {
    onChecked( name );
  }, [onChecked] )
  
  return (
    <ul className="todo" id="todo">
      {
        todos.map( ( {name, checked} ) => {
            if ( !checked ) {
              return (
                <Todo name={ name } onRemoveTodos={ handleRemoveTodos }
                      onChecked={ handleChecked } key={ name }/>
              )
            }
          }
        )
      }
    </ul>
  )
};

export default List;