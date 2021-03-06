import React from "react";
import "./css/Save.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Save({ patch }) {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const input = form["patchName"];

    const newPatchToSave = { ...patch };
    newPatchToSave.name = input.value;

    const patchesFromLocal = JSON.parse(localStorage.getItem("Patches")) || [];
    const existingPatch = patchesFromLocal.find(
      (patch) => patch.name === input.value
    );

    if (newPatchToSave.name === "" || newPatchToSave.name === undefined) {
      alert("Enter Name For Patch");
    } else if (existingPatch) {
      alert("Patch already exists");
    } else {
      patchesFromLocal.push(newPatchToSave);
      localStorage.setItem("Patches", JSON.stringify(patchesFromLocal));
      history.push("/");
    }
  }

  return (
    <div className="Background-Blur">
      <div className="Save-Patch">
        <h2>SAVE PATCH</h2>
        <form onSubmit={handleSubmit}>
          <label> NAME PATCH</label>
          <input
            type="text"
            placeholder="Enter Patch Name"
            id="Patch-Save"
            name="patchName"
          ></input>
          <button className="SaveButton" type="submit">
            SAVE HERE
          </button>
        </form>

        <button className="ExitButton" type="button">
          <Link to="/">EXIT</Link>
        </button>
      </div>
    </div>
  );
}
