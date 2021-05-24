import React, { useState, useEffect } from "react";
import "./css/Load.css";
import { useHistory } from "react-router-dom";

export default function Load({ onPatchLoad }) {
  let history = useHistory();
  function handleBackToMain() {
    history.push("/");
  }

  const [patchesFromLocal, setPatchesFromLocal] = useState([]);

  useEffect(() => {
    const patches = JSON.parse(localStorage.getItem("Patches")) || [];
    setPatchesFromLocal(patches);
  }, []);

  function handleDelete(patch) {
    const patchesToDelete = patchesFromLocal.findIndex(
      (patchToDelete) => patchToDelete.name === patch.name
    );
    console.log(patchesToDelete);
  }

  return (
    <div className="Loaded-Patches">
      <h2>LOAD PATCH</h2>
      <div className="List-Container">
        <ul className="Loaded-List">
          {patchesFromLocal.map((patch) => (
            <li
              key={patch.name}
              name={patch.name}
              className="Loaded-List-Item"
              onClick={() => {
                onPatchLoad(patch);
              }}
            >
              {patch.name}
              <button
                key={patch.name}
                className="DeleteButton"
                onClick={() => {
                  handleDelete(patch);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="LoadButton" type="button" onClick={handleBackToMain}>
        PRESS LOAD
      </button>
    </div>
  );
}
