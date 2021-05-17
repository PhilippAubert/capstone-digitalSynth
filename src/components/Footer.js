import "./css/Footer.css";

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
