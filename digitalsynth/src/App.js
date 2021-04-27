import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";

export default function App() {
  const audioContext = new AudioContext();
  const [oscillator1, setOscillator1] = useState(220);
  const [oscillator2, setOscillator2] = useState(220);
  const [cutOffFrequency, setCutOffFrequency] = useState(100);
  const [ampEnvelope, setAmpEnvelope] = useState(10);
  const [delayAmount, setDelayAmount] = useState(0.5);
  let osc1;
  let osc2;

  function onClickStart() {
    osc1 = audioContext.createOscillator();
    osc1.type = "square";
    osc1.frequency.setValueAtTime(oscillator1, audioContext.currentTime);
    osc2 = audioContext.createOscillator();
    osc2.type = "square";
    osc2.frequency.setValueAtTime(oscillator2, audioContext.currentTime);
    const filter = audioContext.createBiquadFilter();
    osc2.connect(filter);
    osc1.connect(filter);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = ampEnvelope;
    filter.frequency.setValueAtTime(cutOffFrequency, audioContext.currentTime);
    filter.connect(gainNode);
    const delay = audioContext.createDelay();
    delay.delayTime.setValueAtTime(delayAmount, audioContext.currentTime);
    gainNode.connect(delay);
    delay.connect(audioContext.destination);

    osc1.start();
    osc2.start();
    console.log("osc1 playing");
    console.log("osc2 playing");
  }

  function onClickStop() {
    osc1.stop();
    osc2.stop();
  }

  function handleOsc1Change(event) {
    setOscillator1(Number(event.target.value));
  }

  function handleOsc2Change(event) {
    setOscillator2(Number(event.target.value));
  }

  function handleFilterChange(event) {
    setCutOffFrequency(Number(event.target.value));
  }

  function handleAmpChange(event) {
    setAmpEnvelope(Number(event.target.value));
  }

  function handleDelayChange(event) {
    setDelayAmount(Number(event.target.value));
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">SYNTH RESEARCH LAB</header>
        <nav>
          <NavLink className="Slider" to="/oscillator">
            {" "}
            Oscillator 1{" "}
          </NavLink>
          <NavLink className="Slider" to="/filter">
            {" "}
            Filter{" "}
          </NavLink>
          <NavLink className="Slider" to="/amp">
            {" "}
            Amp{" "}
          </NavLink>
        </nav>

        <Switch>
          <Route path="/oscillator">
            {" "}
            <input
              value={oscillator1}
              onChange={handleOsc1Change}
              type="range"
              min="0"
              max="1000"
              className="Value"
            />
          </Route>
          <Route path="/filter">
            <input
              value={cutOffFrequency}
              onChange={handleFilterChange}
              type="range"
              min="0"
              max="100"
              className="Value"
            />
          </Route>
          <Route path="/amp">
            {" "}
            <input
              value={ampEnvelope}
              onChange={handleAmpChange}
              type="range"
              min="0"
              max="100"
              className="Value"
            />
          </Route>
        </Switch>
        <div className="Slider">Oscillator 2</div>
        <input
          value={delayAmount}
          onChange={handleDelayChange}
          type="range"
          min="0"
          max="180"
          className="Value"
        />

        <div className="Slider">Delay</div>

        <input
          value={oscillator2}
          onChange={handleOsc2Change}
          type="range"
          min="0"
          max="1000"
          className="Value"
        />

        <div className="Touchpad"></div>
        <button onClick={onClickStart} className="Btn">
          START
        </button>
        <button onClick={onClickStop} className="Btn">
          STOP
        </button>
      </div>
    </Router>
  );
}
