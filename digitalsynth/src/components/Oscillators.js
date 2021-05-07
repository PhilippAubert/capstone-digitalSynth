import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";
import "./css/Oscillators.css";
import { useState } from "react";

export default function Oscillators({
  osc1Frequency,
  osc2Frequency,
  onChangeFreqOsc1,
  onChangeFreqOsc2,
  onChangeOsc1Type,
  onChangeOsc2Type,
  wavetype
}) {
  const [active, setActive] = useState("false");

  function handleOsc1Change(event) {
    onChangeFreqOsc1(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    onChangeFreqOsc2(Number(event.target.value));
  }

  function handleChangeOsc1Type(wavetype) {
    onChangeOsc1Type(wavetype.currentTarget.id);
    setActive(!active);
  }

  function handleChangeOsc2Type(event) {
    onChangeOsc2Type(event.currentTarget.id);
    setActive(!active);
  }

  return (
    <div className="Function-Board">
      <h2>SET OSCILLATOR</h2>

      <div className="Vco-bar">
        <h2>OSC 1</h2>
        <div className="Icons">
          <button
            id="sawtooth"
            className={wavetype === "sawtooth" ? "Active" : "Change"}
            onClick={handleChangeOsc1Type}
          >
            <Saw />
          </button>{" "}
          <button
            id="square"
            className={"Change"}
            onClick={handleChangeOsc1Type}
          >
            <Square />
          </button>{" "}
          <button id="sine" className={"Change"} onClick={handleChangeOsc1Type}>
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
          <button
            id="sawtooth"
            className={active ? "Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Saw />
          </button>{" "}
          <button
            id="square"
            className={active ? "Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Square />
          </button>{" "}
          <button
            id="sine"
            className={active ? "Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Sine />
          </button>
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
