import React from "react";
import PropTypes from "prop-types";
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

const CounterCustomHook = (props) => {
  const { state, increment, decrement, reset } = useCounter(100);
  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

CounterCustomHook.propTypes = {};

export default CounterCustomHook;
