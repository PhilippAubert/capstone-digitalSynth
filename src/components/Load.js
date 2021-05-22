import React from "react";
import "./css/Load.css";
import { useHistory } from "react-router-dom";

export default function Load() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  const patches = [
    "Eerie Pad",
    "Sine Bass",
    "Brass",
    "Strong String Pad",
    "Highpass Pad",
    "Guitar Saw",
    "Shrieking Phaser",
  ];

  function renderPatches() {
    const arrayOfPatches = patches.map((patch) => {
      return <Patch patchName={patch} />;
    });
    return arrayOfPatches;
  }

  return (
    <div className="Loaded-Patches">
      <h2>LOAD PATCH</h2>
      <div className="List-Container">
        <ul className="Loaded-List">{renderPatches()}</ul>
      </div>

      <button className="LoadButton" type="button" onClick={handleClick}>
        LOAD HERE
      </button>
    </div>
  );
}

function Patch({ patchName }) {
  return <li className="Loaded-List-Item">{patchName}</li>;
}
