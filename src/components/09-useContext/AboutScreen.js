import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const logOut = () => {
    setUser({});
  };

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        type="button"
        className="pt-3 btn btn-outline-danger"
        onClick={logOut}
      >
        LogOut
      </button>
    </div>
  );
};
