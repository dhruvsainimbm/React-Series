import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
        }}
      >
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </li>

        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="/members"
          >
            Members
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
