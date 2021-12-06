export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    case "remove":
      const newState = state.filter((elem) => elem.id !== action.payload.id);
      return [...newState];
    default:
      return state;
  }
};
