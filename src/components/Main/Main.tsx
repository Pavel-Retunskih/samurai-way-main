import { Dialogs } from "../Dialogs/Dialogs";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import "./Main.css";
export function Main() {
  return (
    <main>
      <Navbar />
      {/* <Profile /> */}
      <Dialogs />
    </main>
  );
}
