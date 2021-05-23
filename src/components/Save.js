import React from "react";
import "./css/Save.css";
import { useHistory } from "react-router-dom";
// import { useState } from "react";
import { useSavePatch } from "./services/patches.js";

export default function Save({ patch }) {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form["patchName"];
    patch.name = input.value;
    console.log(patch);
    const patches = JSON.parse(localStorage.getItem("Patches")) || [];
    patches.push(patch);

    localStorage.setItem("Patches", JSON.stringify(patches));
    console.log(input.value);
    history.push("/");
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
          <button className="SaveButton" type="submit">
            SAVE HERE
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
