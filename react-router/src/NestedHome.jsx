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
            to=""
          >
            Profile
          </NavLink>
        </li>
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="settings"
          >
            Settings
          </NavLink>
        </li>
        <li style={{ padding: "12px" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
            to="user/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
