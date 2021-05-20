import Saw from "./Icons/Saw.js";
import Square from "./Icons/Square.js";
import Sine from "./Icons/Sine.js";
import "./css/Oscillators.css";
import { useState } from "react";

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
  const [oscillator1Id, setOscillator1Id] = useState("sawtooth");
  const [oscillator2Id, setOscillator2Id] = useState("sawtooth");

  function handleOsc1Change(event) {
    onChangeFreqOsc1(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    onChangeFreqOsc2(Number(event.target.value));
  }

  function handleChangeOsc1Type(event) {
    onChangeOsc1Type(event.currentTarget.id);
    setOscillator1Id(event.currentTarget.id);
  }

  function handleChangeOsc2Type(event) {
    onChangeOsc2Type(event.currentTarget.id);
    setOscillator2Id(event.currentTarget.id);
  }

  return (
    <div className="Function-Board">
      <h2>SET OSCILLATOR</h2>

      <div className="Vco-bar">
        <label className="Input-Label">OSC 1</label>
        <div className="Icons">
          <button
            id="sawtooth"
            className={
              oscillator1Id === "sawtooth" ? "Change-Active" : "Change"
            }
            onClick={handleChangeOsc1Type}
          >
            <Saw />
          </button>{" "}
          <button
            id="square"
            className={oscillator1Id === "square" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc1Type}
          >
            <Square />
          </button>{" "}
          <button
            id="sine"
            className={oscillator1Id === "sine" ? "Change-Active" : "Change"}
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
            className={
              oscillator2Id === "sawtooth" ? "Change-Active" : "Change"
            }
            onClick={handleChangeOsc2Type}
          >
            <Saw />
          </button>{" "}
          <button
            id="square"
            className={oscillator2Id === "square" ? "Change-Active" : "Change"}
            onClick={handleChangeOsc2Type}
          >
            <Square />
          </button>{" "}
          <button
            id="sine"
            className={oscillator2Id === "sine" ? "Change-Active" : "Change"}
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
