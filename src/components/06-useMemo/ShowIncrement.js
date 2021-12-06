import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Volvio a redibujar");
  return (
    <div>
      <button
        type="button"
        name=""
        id=""
        className="btn btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        {" "}
        Incrementar
      </button>
    </div>
  );
});
