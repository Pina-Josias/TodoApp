import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    const tempUser = {
      id: 123,
      name: "Josias",
    };

    setUser(tempUser);
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
