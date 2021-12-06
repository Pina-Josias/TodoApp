import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me dibuje de nuevo");
  return <small>{value}</small>;
});
