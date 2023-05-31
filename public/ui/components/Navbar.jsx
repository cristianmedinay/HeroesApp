import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink
        className={({ isActive }) =>
          `nav-item nav-link ${isActive ? "active" : ""} `
        }
        to="/"
      >
        Asociaciones
      </NavLink>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-lfex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {/*  <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""} `
            }
            to="/login"
          >
            Logout
          </NavLink> */}
          <span className="nav-item nav-link text-primary">{user?.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
