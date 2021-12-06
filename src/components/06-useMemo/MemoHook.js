import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(2000);

  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <div className="col">
        <button
          type="button"
          className="btn btn-primary margin"
          onClick={increment}
        >
          +1
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
