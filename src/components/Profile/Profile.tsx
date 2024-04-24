import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
export function Profile() {
  return (
    <section className={s.container}>
      <div className={s.image}></div>
      <div className={s.profile}>
        <div className={s.profileImg}></div>
        <div className={s.profileDescription}>
          <h3>Dmitry K</h3>
          <ul>
            <li>Date of bird: 2 january</li>
            <li>City: Minsk</li>
            <li>Education: BSU 11</li>
            <li>Web Site: it-camasutra.com</li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </section>
  );
}
