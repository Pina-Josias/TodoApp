import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./effects.css";
import { Message } from "./Message";

const SimpleForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const onUpdateName = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("Hola");
  }, []);
  return (
    <>
      <div className="form-group">
        <h1>UseEffect</h1>
        <hr />
        <input
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          type="text"
          value={name}
          onChange={onUpdateName}
        ></input>
        <input
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          type="email"
          value={email}
          onChange={onUpdateName}
        ></input>
      </div>
      {name === "123" && <Message />}
    </>
  );
};

SimpleForm.propTypes = {};

export default SimpleForm;
