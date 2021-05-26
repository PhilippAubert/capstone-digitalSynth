import React, { useState, useEffect } from "react";
import "./css/Load.css";
import { useHistory, Link } from "react-router-dom";

export default function Load({ onPatchLoad }) {
  let history = useHistory();
  function loadAndRedirect() {
    onPatchLoad(selectedPatch);
    history.push("/");
  }

  const [patchesFromLocal, setPatchesFromLocal] = useState([]);
  const [selectedPatch, setSelectedPatch] = useState({});

  useEffect(() => {
    const patches = JSON.parse(localStorage.getItem("Patches")) || [];
    setPatchesFromLocal(patches);
  }, []);

  function handleDelete(patch) {
    const patchToDelete = patchesFromLocal.findIndex(
      (patchesToDelete) => patchesToDelete.name === patch.name
    );

    const copyOfPatches = patchesFromLocal.slice();
    copyOfPatches.splice(patchToDelete, 1);
    setPatchesFromLocal(copyOfPatches);
    localStorage.setItem("Patches", JSON.stringify(copyOfPatches));
  }

  return (
    <div className="Background-Blur">
      <div className="Loaded-Patches">
        <h2>LOAD PATCH</h2>
        <div className="List-Container">
          <ul className="Loaded-List">
            {patchesFromLocal.map((patch) => (
              <li
                key={patch.name}
                name={patch.name}
                className={
                  selectedPatch.name === patch.name
                    ? "Loaded-List-Item-Active"
                    : "Loaded-List-Item"
                }
                onClick={() => {
                  setSelectedPatch(patch);
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

        <button className="LoadButton" type="button" onClick={loadAndRedirect}>
          PRESS LOAD
        </button>
        <button className="ExitButton" type="button">
          <Link to="/">BACK TO MAIN</Link>
        </button>
      </div>
    </div>
  );
}
