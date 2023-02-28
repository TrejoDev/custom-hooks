

export const todoReducer = ( initialState=[], action ) => {
  
    switch (action.type) {
        case '[TODO] Add Todo':  // En caso de: action.type === '[TODO] Add Todo'
            return [ ...initialState, action.payload ]; //Ejecuta esto... Recordamos que esparcimos el initialState; y con action.payload cargamos la nueva accion.
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );  //el operador !== se utiliza para la comparación estricta de desigualdades.

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if( todo.id === action.payload ){  //action.payload = id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            } )
        
            default:
            return initialState;     //Sino, retorna esto..
            
    }
  
    
}
