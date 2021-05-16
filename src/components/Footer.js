import "./css/Footer.css";
import Save from "./modals/Save.js";
import Load from "./modals/Load.js";

export default function Footer({ onClickSave, onClickLoad }) {
  return (
    <div className="Footer">
      <div className="FooterNav">
        <button className="FooterButton" onClick={onClickLoad}>
          LOAD
        </button>

        <button className="FooterButton" onClick={onClickSave}>
          SAVE
        </button>
      </div>
    </div>
  );
}
