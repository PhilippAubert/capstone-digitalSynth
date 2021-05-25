import "./css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer({ onClickSave, children }) {
  return (
    <div className="Footer">
      <div className="FooterNav">
        <button className="FooterButton">
          <Link to="load">LOAD</Link>
        </button>

        <button className="FooterButton">
          <Link to="save">SAVE</Link>
        </button>
        {children}
      </div>
    </div>
  );
}
