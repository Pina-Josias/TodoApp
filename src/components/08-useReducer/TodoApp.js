import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./style.css";
import { todoReducer } from "./todoReducer";

const initialState = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
//     [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender React",
//     done: false,
//   },
// ];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initialState);
  const [{ description }, handleInputChange, resetForm] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 4) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    resetForm();
  };

  return (
    <div>
      <h1>App Reducer: ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button type="button" name="" id="" className="btn btn-danger">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-7">
          <h4>Agregar Todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            ></input>
            <button
              type="submit"
              className="btn btn-block btn-outline-primary mt-1 "
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
