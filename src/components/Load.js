import React, { useState, useEffect } from "react";
import "./css/Load.css";
import { useHistory } from "react-router-dom";

export default function Load({ onPatchLoad }) {
  const [patchesFromLocal, setPatchesFromLocal] = useState([]);

  useEffect(() => {
    const patches = JSON.parse(localStorage.getItem("Patches")) || [];
    setPatchesFromLocal(patches);
  }, []);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="Loaded-Patches">
      <h2>LOAD PATCH</h2>
      <div className="List-Container">
        <ul className="Loaded-List">
          {patchesFromLocal.map((patch) => (
            <li
              key={patch.name}
              className="Loaded-List-Item"
              onClick={() => {
                onPatchLoad(patch);
                history.push("/");
              }}
            >
              {patch.name}
            </li>
          ))}
        </ul>
      </div>

      <button className="LoadButton" type="button" onClick={handleClick}>
        LOAD HERE
      </button>
    </div>
  );
}
