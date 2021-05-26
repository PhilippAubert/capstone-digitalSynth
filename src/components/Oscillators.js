import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";
import "./css/Oscillators.css";

export default function Oscillators({
  oscillator1,
  oscillator2,
  osc1Type,
  osc2Type,
  onChangeFreqOsc1,
  onChangeFreqOsc2,
  onChangeOsc1Type,
  onChangeOsc2Type,
}) {
  function handleOsc1Change(event) {
    onChangeFreqOsc1(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    onChangeFreqOsc2(Number(event.target.value));
  }

  function handleChangeOsc1Type(event) {
    onChangeOsc1Type(event.currentTarget.id);
  }

  function handleChangeOsc2Type(event) {
    onChangeOsc2Type(event.currentTarget.id);
  }

  return (
    <div className="Function-Board">
      <h2>SET OSCILLATOR</h2>

      <div className="Vco-bar">
        <label className="Input-Label">OSC 1</label>
        <div className="Icons">
          <button
            id="sawtooth"
            className={osc1Type === "sawtooth" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc1Type}
          >
            <Saw />
          </button>
          <button
            id="square"
            className={osc1Type === "square" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc1Type}
          >
            <Square />
          </button>
          <button
            id="sine"
            className={osc1Type === "sine" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc1Type}
          >
            <Sine />
          </button>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="200"
        value={oscillator1}
        onChange={handleOsc1Change}
        className="Value"
      />

      <div className="Vco-bar">
        <label className="Input-Label">OSC 2</label>
        <div className="Icons">
          <button
            id="sawtooth"
            className={osc2Type === "sawtooth" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Saw />
          </button>
          <button
            id="square"
            className={osc2Type === "square" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Square />
          </button>
          <button
            id="sine"
            className={osc2Type === "sine" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Sine />
          </button>
        </div>
      </div>

      <input
        value={oscillator2}
        onChange={handleOsc2Change}
        type="range"
        min="0"
        max="250"
        className="Value"
      />
    </div>
  );
}
