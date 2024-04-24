import { BrowserRouter, Route } from "react-router-dom";
import { Dialogs } from "../Dialogs/Dialogs";
import { Navbar } from "../Navbar/Navbar";
import { Profile } from "../Profile/Profile";
import "./Main.css";
import { News } from "../News/News";
import { Music } from "../Music/Music";
import { Settings } from "../Settings/Settings";
export function Main() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Route path={"/profile"} component={Profile} />
        <Route path={"/dialogs"} component={Dialogs} />
        <Route path={"/news"} component={News} />
        <Route path={"/music"} component={Music} />
        <Route path={"/settings"} component={Settings} />
      </BrowserRouter>
    </main>
  );
}
