import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>UseEffect</h1>
        <hr />

        <input
          name="name"
          className="form-control "
          placeholder="Nombre"
          autoComplete="off"
          type="text"
          value={name}
          onChange={handleInputChange}
        ></input>
        <input
          name="email"
          className="form-control "
          placeholder="email@email.com"
          autoComplete="off"
          type="email"
          value={email}
          onChange={handleInputChange}
        ></input>
        <input
          name="password"
          className="form-control "
          placeholder="******"
          autoComplete="off"
          type="password"
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
