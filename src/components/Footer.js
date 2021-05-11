import "./css/Footer.css";

import { BrowserRouter as Switch, Route } from "react-router-dom";

export default function Footer({ onClickSave, onClickLoad }) {
  return (
    <div className="Footer">
      <Switch>
        <div className="FooterNav">
          <Route>
            <h2>CONFIG</h2>
          </Route>
          <Route>
            <h2 onClick={onClickLoad}>LOAD</h2>
          </Route>

          <Route>
            <h2 onClick={onClickSave}>SAVE</h2>
          </Route>
        </div>
      </Switch>
    </div>
  );
}
