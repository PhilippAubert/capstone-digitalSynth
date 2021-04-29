import "./css/Footer.css";
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
  } from "react-router-dom";
  

export default function Footer(){
    return (
        <div className="Footer"> 
        
        <Router>

            <Switch>

                <div className="FooterNav">
                    <Route>
                        <h2>Config</h2>
                    </Route>
                    <Route>
                        
                    <h2>Load</h2>
                    </Route>

                    <Route>

                    <h2>Save</h2>                  
                      </Route>
                </div>

            </Switch> 
        
        </Router> 
        
        </div>
    )
}

