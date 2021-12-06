import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoListItems = ({ todos, handleDelete, handleToggle }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            index={i}
            todo={todo}
            handleTongle={handleToggle}
            deleteItem={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

TodoListItems.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func,
};

export default TodoListItems;
