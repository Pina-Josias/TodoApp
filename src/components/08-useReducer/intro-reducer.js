const initState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (state = initState, action) => {
  if (action?.type === "agregar") {
    const resp = [...state, action.payload];
    return resp;
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

const action = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, action);

console.log(todos);
