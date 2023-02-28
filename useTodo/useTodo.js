import { useEffect, useReducer } from "react"
import {todoReducer} from './todoReducer'

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];  //JSON.parse( localStorage.getItem('todos'): Obten los item parseados a object almacenados en el local storage.
};

export const useTodo = (  ) => {
  
    const [todos, dispatch] = useReducer( todoReducer, [], init )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) || [] ) // localStorage.setItem: Permite almacenar en el navegador local, propiedades key : value en strings.
                                                                    // || []: en caso q todos no tenga valor ejecuta un arreglo vacio.
    }, [todos]);
    
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    };
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    };
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
  }  
}
