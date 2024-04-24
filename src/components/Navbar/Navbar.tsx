import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
export function Navbar() {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={`${s.item} ${s.active}`}>
          {" "}
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Dialogs
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="settings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
