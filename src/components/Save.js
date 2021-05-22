import React from "react";
import "./css/Save.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Save() {
  let history = useHistory();

  function handleClick(event) {
    history.push("/");
  }

  const [patches, setPatches] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form["patchName"];
    console.log(input.value);

    const newPatches = [...patches, input.value];

    setPatches(newPatches);

    form.reset();
  }

  return (
    <div className="Save-Patch">
      <h2>SAVE PATCH</h2>
      <div className="Save-Patch-Area">
        <form onSubmit={handleSubmit}>
          <label> NAME PATCH</label>
          <input
            type="text"
            placeholder="Enter Patch Name"
            id="Patch-Save"
            name="patchName"
          ></input>
        </form>
        <button className="SaveButton" type="submit" onClick={handleClick}>
          SAVE HERE
        </button>
      </div>
    </div>
  );
}
