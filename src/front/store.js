export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'LOGIN_SUCCESS':
      return {
        ...store,
        user: action.payload.user,
        token: action.payload.token,
        error: null
      };

    case 'LOGOUT':
      return { ...store, user: null, token: null, error: null };

    case 'error':
      return { ...store, error: action.payload };
      
    default:
      throw Error('Unknown action.');
  }    
}
