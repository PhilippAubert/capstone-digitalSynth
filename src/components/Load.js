import React from "react";
import "./css/Load.css";
import { Link } from "react-router-dom";

export default function Load() {
  return (
    <div className="Loaded-Patches">
      <h2>LOAD PATCH</h2>
      <ul className="Loaded-List">
        <li className="Loaded-List-Item"> Eerie Pad</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>

        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
        <li className="Loaded-List-Item"> Short String</li>
      </ul>
      <h2>CLICK</h2> <button>
        <Link to="/oscillator">HERE</Link>
        </button> <h2>TO LOAD</h2>
    </div>
  );
}
