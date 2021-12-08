import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-3" to="/">
        UseContext
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="./">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="./login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="./about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
