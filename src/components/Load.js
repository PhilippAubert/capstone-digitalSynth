import React, { useState, useEffect } from "react";
import "./css/Load.css";
import { useHistory } from "react-router-dom";

export default function Load({
  setOsc1Frequency,
  setOsc1Type,
  setOsc2Frequency,
  setOsc2Type,
  setFilterFrequency,
  setFilterType,
  setAmpEnvelope,
  setResonance,
  setReverbDuration,
  setPhaserDuration,
}) {
  const [patchesFromLocal, setPatchesFromLocal] = useState([]);

  useEffect(() => {
    const patches = JSON.parse(localStorage.getItem("Patches")) || [];
    setPatchesFromLocal(patches);
  }, []);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function renderPatches() {
    const arrayOfPatches = patchesFromLocal.map((localpatch) => {
      return <Patch patchName={localpatch.name} />;
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
