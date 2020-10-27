// a reducer is just a function that takes state and a action and returns a new state,(doesn't mutate orignal state, return a NEW state)

// action is a an object and needs to have type key, can have opitinal payload/ data attached to it

// state is the current state

// const reducer = (state, action) => {
//   // create new state and return (if state needs to changes)
// };
const defaultState = ["Learn redux"];
const todos = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        // if match action.id create a new todo object with toggle complete
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        // else just return todo
        return todo;
      });
    default:
      return state;
  }
};

export default todos;
// this is how a call to a reducer will look like
// we dispatch an action
// dispatch({ type: "ADD_TODOS", todo: "nap" });
