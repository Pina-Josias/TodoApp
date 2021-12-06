import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, index, handleTongle, deleteItem }) => {
  return (
    <>
      <li key={todo.id} className="list-group-item">
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleTongle(todo.id)}
        >
          {index + 1}. {todo.desc}
        </p>
        <button
          type="button"
          name=""
          id=""
          className="btn btn-danger"
          onClick={() => deleteItem(todo)}
        >
          Eliminar
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
  handleTongle: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TodoItem;
