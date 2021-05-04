import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";

export default function Oscillators({
  osc1Frequency,
  osc2Frequency,
  onChange,
}) {
  function handleOsc1Change(event) {
    onChange(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    onChange(Number(event.target.value));
  }

  return (
    <div className="Function-Board">
      <h2>SET OSCILLATOR</h2>

      <div className="Vco-bar">
        <h2>OSC 1</h2>
        <div className="Icons">
          <Saw />
          <Square />
          <Sine />
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="440"
        value={osc1Frequency} // to local storage 1
        onChange={handleOsc1Change}
        className="Value"
      />

      <div className="Vco-bar">
        <h2>OSC 2</h2>
        <div className="Icons">
          <Saw />
          <Square />
          <Sine />
        </div>
      </div>

      <input
        value={osc2Frequency} // to local storage 2
        onChange={handleOsc2Change}
        type="range"
        min="0"
        max="440"
        className="Value"
      />
    </div>
  );
}
