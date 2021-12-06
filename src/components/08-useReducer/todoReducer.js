export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      break;
    case "remove":
      break;

    default:
      return state;
  }
};
