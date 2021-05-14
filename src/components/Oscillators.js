import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";
import "./css/Oscillators.css";
import { useState } from "react";

export default function Oscillators({
  oscillator1,
  oscillator2,
  onChangeFreqOsc1,
  onChangeFreqOsc2,
  onChangeOsc1Type,
  onChangeOsc2Type,
}) {
  const [active, setActive] = useState("false");

  function handleOsc1Change(event) {
    onChangeFreqOsc1(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    onChangeFreqOsc2(Number(event.target.value));
  }

  function handleChangeOsc1Type(event) {
    onChangeOsc1Type(event.currentTarget.id);
    setActive(!active);
  }

  function handleChangeOsc2Type(event) {
    onChangeOsc2Type(event.currentTarget.id);
    setActive(!active);
  }

  return (
    <div className="Function-Board">
      <p>SET OSCILLATOR</p>

      <div className="Vco-bar">
        <p>OSC 1</p>
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
        max="200"
        value={oscillator1}
        onChange={handleOsc1Change}
        className="Value"
      />

      <div className="Vco-bar">
        <p>OSC 2</p>
        <div className="Icons">
          <button
            id="sawtooth"
            className="Change"
            onClick={handleChangeOsc2Type}
          >
            <Saw />
          </button>{" "}
          <button id="square" className="Change" onClick={handleChangeOsc2Type}>
            <Square />
          </button>{" "}
          <button id="sine" className="Change" onClick={handleChangeOsc2Type}>
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
