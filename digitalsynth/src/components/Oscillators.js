import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";

export default function Oscillators({
  osc1Frequency,
  osc2Frequency,
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
        <h2>OSC 1</h2>
        <div className="Icons">
          <button
            id="sawtooth"
            className="Change"
            onClick={handleChangeOsc1Type}
          >
            <Saw />
          </button>{" "}
          <button id="square" className="Change" onClick={handleChangeOsc1Type}>
            <Square />
          </button>{" "}
          <button id="sine" className="Change" onClick={handleChangeOsc1Type}>
            <Sine />
          </button>
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
          <div id="sawtooth" className="Change" onClick={handleChangeOsc2Type}>
            <Saw />
          </div>{" "}
          <div id="square" className="Change" onClick={handleChangeOsc2Type}>
            <Square />
          </div>{" "}
          <div id="sine" className="Change" onClick={handleChangeOsc2Type}>
            <Sine />
          </div>
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
