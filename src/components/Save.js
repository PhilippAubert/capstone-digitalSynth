import React from "react";
import "./css/Save.css";
import {useHistory} from "react-router-dom";

export default function Save() {

  let history = useHistory();

  function handleClick(){
    history.push("/");
  }

  return (
    <div className="Save-Patch">
      <h2>SAVE PATCH</h2>
      <div className="Save-Patch-Area">
        <form>
        <label> NAME PATCH</label>
        <input type="text" placeholder="Enter Patch-Name" id="Patch-Save" name="Patch-Name"></input>
        </form>
        <button className="SaveButton" type="button" onClick={handleClick}>SAVE HERE</button>

      </div>
    </div> 
  );
}
