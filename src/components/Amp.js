import "./css/Amp.css";

export default function Amp({ attack, decay, onChangeAttack, onChangeDecay }) {
  function handleAttackChange(event) {
    onChangeAttack(Number(event.target.value));
  }

  function handleDecayChange(event) {
    onChangeDecay(Number(event.target.value));
  }

  return (
    <div className="Function-Board">
      <div className="Amp-bar">
        <h2>SET AMP ENVELOPE</h2>
      </div>
      <label className="Amp-label"> ATTACK</label>
      <input
        value={attack}
        onChange={handleAttackChange}
        type="range"
        min="0.1"
        max="2"
        className="Value"
        step="0.01"
      />
      <label className="Amp-label"> DECAY </label>
      <input
        value={decay}
        onChange={handleDecayChange}
        type="range"
        min="0"
        max="2"
        className="Value"
        step="0.01"
      />
    </div>
  );
}
