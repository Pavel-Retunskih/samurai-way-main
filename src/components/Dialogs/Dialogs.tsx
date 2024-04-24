import s from "./Dialogs.module.css";
export function Dialogs() {
  return (
    <div className={s.container}>
      <h2>Dialogs</h2>
      <div className={s.dialogsContainer}>
        <div className={s.dialogs}>
          <div className={s.dialog}>Dmitriy</div>
          <div className={s.dialog}>Andrey</div>
          <div className={s.dialog}>Igor</div>
          <div className={s.dialog}>Sveta</div>
        </div>
        <div className={s.messages}>
          <div className="message">Hi</div>
          <div className="message">How are you?</div>
        </div>
      </div>
    </div>
  );
}
