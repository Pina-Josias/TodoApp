import React, { useEffect, useReducer } from "react";
import "./style.css";
import { TodoAdd } from "./TodoAdd";
import TodoListItems from "./TodoListItems";
import { todoReducer } from "./todoReducer";

const initialState = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteItem = (todoItem) => {
    const action = {
      type: "remove",
      payload: todoItem,
    };
    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleTongle = (todoId) => {
    const action = {
      type: "update",
      payload: todoId,
    };
    dispatch(action);
  };
  return (
    <div>
      <h1>App Reducer: ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoListItems
            todos={todos}
            handleDelete={deleteItem}
            handleToggle={handleTongle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
