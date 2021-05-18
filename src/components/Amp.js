import "./css/Amp.css";

export default function Amp({ attack, decay, onChangeAttack, onChangeDecay }) {
  function handleAttackChange(event) {
    onChangeAttack(Number(event.target.value));
  }

  function handleDecayChange(event) {
    onChangeDecay(Number(event.target.value));
  }

  return (
    <div>
      {" "}
      <div className="Function-Board">
        <div className="Amp-bar">
          <h2>SET AMP ENVELOPE</h2>
        </div>{" "}
        <label className="Amp-label"> Attack </label>
        <input
          value={attack}
          onChange={handleAttackChange}
          type="range"
          min="0.1"
          max="1000"
          className="Value"
          step="0.1"
        />
        <label className="Amp-label"> Decay </label>
        <input
          value={decay}
          onChange={handleDecayChange}
          type="range"
          min="0"
          max="1000"
          className="Value"
        />
      </div>
    </div>
  );
}
