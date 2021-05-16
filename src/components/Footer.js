import "./css/Footer.css";

export default function Footer({ onClickSave, onClickLoad }) {
  return (
    <div className="Footer">
      <div className="FooterNav">
        <h2 onClick={onClickLoad}>LOAD</h2>

        <h2 onClick={onClickSave}>SAVE</h2>
      </div>
    </div>
  );
}
