import s from "./Navbar.module.css";
export function Navbar() {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={`${s.item} ${s.active}`}>Profile</li>
        <li className={s.item}>Messages</li>
        <li className={s.item}>News</li>
        <li className={s.item}>Music</li>
        <li className={s.item}>Settings</li>
      </ul>
    </nav>
  );
}
