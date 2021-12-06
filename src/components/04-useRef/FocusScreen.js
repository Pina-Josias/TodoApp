import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const hadleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      ></input>
      <button className="btn btn-outline-primary mt-5" onClick={hadleClick}>
        {" "}
        Focus
      </button>
    </>
  );
};
