import { memo } from "react";

export const procesoPesado = memo((iteraciones) => {
  for (let index = 0; index < iteraciones; index++) {
    console.log("Procesando....");
  }
  return `${iteraciones} iteraciones realizadas`;
});
