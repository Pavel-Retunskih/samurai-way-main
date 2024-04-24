import s from "./Post.module.css";
export function Post() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <img
          className={s.postProfileImage}
          src="https://masterpiecer-images.s3.yandex.net/228b2f3e9ccc11eea34622d0c3bbf3a3:upscaled"
          alt="avatarka"
        />
        <span>Post1</span>
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
