import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};
export function Post({ message, likesCount }: PostPropsType) {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <img
          className={s.postProfileImage}
          src="https://masterpiecer-images.s3.yandex.net/228b2f3e9ccc11eea34622d0c3bbf3a3:upscaled"
          alt="avatarka"
        />
        <span>{message}</span>
      </div>
      <div>
        <span>{likesCount}</span>
      </div>
    </div>
  );
}
