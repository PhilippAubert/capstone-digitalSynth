import "./css/Footer.css";
import { useState } from "react";
import Save from "./modals/Save.js";
import Load from "./modals/Load.js";

export default function Footer({ onClickSave, onClickLoad }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Footer">
      <div className="FooterNav">
        <div>
          <button className="FooterButton" onClick={() => setIsOpen(true)}>
            {" "}
            LOAD{" "}
          </button>

          <Load
            className="FooterButton"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <h2>LOAD</h2>
            <label>Load A Sound</label>
            <ul>
              <li> Pad Eerie </li>
              <li> Hancock Bass </li>
              <li> Laser Lead</li>
            </ul>{" "}
          </Load>
        </div>
        <button className="FooterButton" onClick={onClickSave}>
          SAVE
        </button>
      </div>
    </div>
  );
}
