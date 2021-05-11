import "./App.css";
import Header from "./components/Header.js";
import Oscillators from "./components/Oscillators.js";
import FilterBoard from "./components/FilterBoard.js";
import Effects from "./components/Effects.js";
import Touchpad from "./components/Touchpad.js";
import Footer from "./components/Footer.js";
import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";

export default function App() {
  const [osc1Frequency, setOsc1Frequency] = useState(220);
  const [osc1Type, setOsc1Type] = useState("sawtooth");
  const [osc2Frequency, setOsc2Frequency] = useState(220);
  const [osc2Type, setOsc2Type] = useState("sawtooth");

  const [filterFrequency, setFilterFrequency] = useState(1500);
  const [resonance, setResonance] = useState(0.01);
  const [filterType, setFilterType] = useState("lowpass");

  const [ampEnvelope, setAmpEnvelope] = useState({
    attack: 0.1,
    decay: 100,
  });

  const [reverbDuration, setReverbDuration] = useState(0.001);
  const [phaserDuration, setPhaserDuration] = useState(0.001);

  const oscRef1 = useRef(null);
  const oscRef2 = useRef(null);
  const filterRef = useRef(null);
  const resonanceRef = useRef(null);
  const filterTypeRef = useRef(null);
  const ampEnvRef = useRef(null);
  const revRef = useRef(null);
  const phaserRef = useRef(null);
  const limiterRef = useRef(null);

  function onClickStart() {
    Tone.start();
    oscRef1.current = new Tone.Oscillator(osc1Frequency).start();
    oscRef1.current.type = osc1Type;
    oscRef2.current = new Tone.Oscillator(osc2Frequency).start();
    oscRef2.current.type = osc2Type;

    filterRef.current = new Tone.Filter(filterFrequency);
    filterRef.current.type = filterType;
    filterRef.current.Q.value = resonance;
    ampEnvRef.current = new Tone.AmplitudeEnvelope(ampEnvelope);

    revRef.current = new Tone.Reverb(reverbDuration);
    phaserRef.current = new Tone.Phaser(phaserDuration);
    limiterRef.current = new Tone.Limiter(-20);

    oscRef1.current.connect(filterRef.current);
    oscRef2.current.connect(filterRef.current);
    filterRef.current.connect(revRef.current);
    revRef.current.connect(phaserRef.current);
    phaserRef.current.connect(limiterRef.current);
    limiterRef.current.connect(Tone.getDestination());
  }

  function onClickStop() {
    oscRef1.current.stop();
    oscRef2.current.stop();
  }

  function handleOsc1Type(waverform1) {
    setOsc1Type(waverform1);
  }

  function handleOsc2Type(waveform2) {
    setOsc2Type(waveform2);
  }

  function handleOsc1FrequencyChange(oscillator1) {
    setOsc1Frequency(oscillator1);
  }

  function handleOsc2FrequencyChange(oscillator2) {
    setOsc2Frequency(oscillator2);
  }

  function handleFilterCutoffChange(cutOff) {
    setFilterFrequency(cutOff);
  }

  function handleFilterResonanceChange(resonance) {
    setResonance(resonance);
  }

  function handleFilterTypeChange(filterType) {
    setFilterType(filterType);
  }

  function handleAttackChange(event) {
    setAmpEnvelope({ ...ampEnvelope, attack: Number(event.target.value) });
  }

  function handleReverbChange(reverb) {
    setReverbDuration(reverb);
  }

  function handlePhaserChange(phaser) {
    setPhaserDuration(phaser);
  }

  function handleTouchChange(coordinates) {
    setOsc1Frequency(coordinates.y);
    setOsc2Frequency(coordinates.x);
  }

  useEffect(() => {
    if (oscRef1.current) {
      oscRef1.current.frequency.value = osc1Frequency;
    }
  }, [osc1Frequency]);

  useEffect(() => {
    if (oscRef2.current) {
      oscRef2.current.frequency.value = osc2Frequency;
    }
  }, [osc2Frequency]);

  useEffect(() => {
    if (oscRef1.current) {
      oscRef1.current.type = osc1Type;
    }
  }, [osc1Type]);

  useEffect(() => {
    if (oscRef2.current) {
      oscRef2.current.type = osc2Type;
    }
  }, [osc2Type]);

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.frequency.value = filterFrequency;
    }
  }, [filterFrequency]);

  useEffect(() => {
    if (resonanceRef.current) {
      resonanceRef.current.Q.value = resonance;
    }
  }, [resonance]);

  useEffect(() => {
    if (filterTypeRef.current) {
      filterTypeRef.current.type = filterType;
    }
  }, [filterType]);

  useEffect(() => {
    if (revRef.current) {
      revRef.current.decay = reverbDuration;
    }
  }, [reverbDuration]);

  useEffect(() => {
    if (phaserRef.current) {
      phaserRef.current.octaves = phaserDuration;
    }
  }, [phaserDuration]);

  const savedPatch = {
    osc1Frequency,
    osc1Type,
    osc2Frequency,
    osc2Type,
    filterFrequency,
    filterType,
    resonance,
    reverbDuration,
    phaserDuration,
  };

  function handleSave() {
    localStorage.setItem("Patch", JSON.stringify(savedPatch));
  }

  function handleLoad() {
    const loadedPatch = JSON.parse(localStorage.getItem("Patch"));
    setOsc1Frequency(loadedPatch.osc1Frequency);
    setOsc1Type(loadedPatch.osc1Type);
    setOsc2Frequency(loadedPatch.osc2Frequency);
    setOsc2Type(loadedPatch.osc2Type);
    setFilterFrequency(loadedPatch.filterFrequency);
    setFilterType(loadedPatch.filterType);
    setResonance(loadedPatch.resonance);
    setReverbDuration(loadedPatch.reverbDuration);
    setPhaserDuration(loadedPatch.phaserDuration);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <Header />
        </header>
        <main className="App-Main">
          <nav className="Nav-Bar">
            <NavLink className="Slider" to="/oscillator">
              {" "}
              VCO{" "}
            </NavLink>
            <NavLink className="Slider" to="/filter">
              {" "}
              VCF{" "}
            </NavLink>
            <NavLink className="Slider" to="/amp">
              {" "}
              VCA{" "}
            </NavLink>
            <NavLink className="Slider" to="/vfx">
              {" "}
              EFX{" "}
            </NavLink>
          </nav>

          <Switch>
            <Route path="/oscillator">
              <Oscillators
                oscillator1={osc1Frequency}
                oscillator2={osc2Frequency}
                onChangeOsc1Type={handleOsc1Type}
                onChangeOsc2Type={handleOsc2Type}
                onChangeFreqOsc1={handleOsc1FrequencyChange}
                onChangeFreqOsc2={handleOsc2FrequencyChange}
              />
            </Route>
            <Route path="/filter">
              <FilterBoard
                cutOff={filterFrequency}
                resonance={resonance}
                onChangeFreq={handleFilterCutoffChange}
                onChangeRes={handleFilterResonanceChange}
                onChangeFilterType={handleFilterTypeChange}
              />
            </Route>

            <Route path="/amp">
              <div className="Function-Board">
                <div className="Amp-bar">
                  <h2>SET AMP ENVELOPE</h2>
                </div>{" "}
                <h2> Attack </h2>
                <input
                  value={ampEnvelope.attack}
                  onChange={handleAttackChange}
                  type="range"
                  min="0.1"
                  max="1000"
                  className="Value"
                  step="0.1"
                />
                <h2> Decay </h2>
                <input type="range" min="0" max="100" className="Value" />
              </div>
            </Route>
            <Route path="/vfx">
              <Effects
                reverb={reverbDuration}
                phaser={phaserDuration}
                onChangeReverb={handleReverbChange}
                onChangePhaser={handlePhaserChange}
              />
            </Route>
          </Switch>

          <Touchpad
            onTouchChange={handleTouchChange}
            onTouchStart={onClickStart}
            onTouchEnd={onClickStop}
          />
          <div className="OnOff_Board">
            <button className="OnOff" onClick={onClickStart}>
              {" "}
              Start{" "}
            </button>
            <button className="OnOff" onClick={onClickStop}>
              {" "}
              Stop{" "}
            </button>
          </div>
        </main>
        <Footer onClickSave={handleSave} onClickLoad={handleLoad} />
      </div>
    </Router>
  );
}
