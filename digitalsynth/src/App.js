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
  const [oscillator, setOscillator] = useState(220);
  const [cutOffFrequency, setCutOffFrequency] = useState(100);
  const [ampEnvelope, setAmpEnvelope] = useState(10);
  const [delayAmount, setDelayAmount] = useState(1.0);
  let osc;

  function onClickStart() {
    osc = audioContext.createOscillator();
    osc.type = "square";
    osc.frequency.setValueAtTime(oscillator, audioContext.currentTime);
    const filter = audioContext.createBiquadFilter();
    osc.connect(filter);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = ampEnvelope;
    filter.frequency.setValueAtTime(cutOffFrequency, audioContext.currentTime);
    filter.connect(gainNode);
    const delay = audioContext.createDelay();
    delay.delayTime.setValueAtTime(delayAmount, audioContext.currentTime);
    gainNode.connect(delay);
    delay.connect(audioContext.destination);

    osc.start();
  }

  function onClickStop() {
    osc.stop();
  }

  function handleOscChange(event) {
    setOscillator(Number(event.target.value));
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
            Oscillator{" "}
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
              value={oscillator}
              onChange={handleOscChange}
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
        <div className="Slider">Delay</div>
        <input
          value={delayAmount}
          onChange={handleDelayChange}
          type="range"
          min="0"
          max="18"
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
