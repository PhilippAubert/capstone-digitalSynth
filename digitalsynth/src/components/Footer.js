import "./css/Footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Footer({ onClickSave }) {
  function onSave() {
    onClickSave();
  }

  return (
    <div className="Footer">
      <Router>
        <Switch>
          <div className="FooterNav">
            <Route>
              <h2>CONFIG</h2>
            </Route>
            <Route>
              <h2>LOAD</h2>
            </Route>

            <Route>
              <h2 onClick={onSave}>SAVE</h2>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}
