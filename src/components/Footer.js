import "./css/Footer.css";
import { Switch, Route, Link } from "react-router-dom";
import Load from "./Load.js";
import Save from "./Save.js";

export default function Footer({ onClickSave, onClickLoad }) {
  return (
    <div className="Footer">
      <div className="FooterNav">
        <button className="FooterButton" onClick={onClickLoad}>
          <Link to="load">LOAD</Link>
        </button>

        <button className="FooterButton" onClick={onClickSave}>
          <Link to="save">SAVE</Link>
        </button>

        <Switch>
          <Route path="/load">
            <Load />
          </Route>
          <Route path="/save">
            <Save />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
