import "./css/Footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <footer className="App-Footer">
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
                <h2>SAVE</h2>
              </Route>
            </div>
          </Switch>
        </Router>
      </footer>
    </div>
  );
}
