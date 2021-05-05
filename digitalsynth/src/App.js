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
  const [osc1Frequency, setOsc1Frequency] = useState(220); // <========= BEI LOAD _ HIER EIN NEUER USE_STATE !
  const [osc2Frequency, setOsc2Frequency] = useState(220);
  const [osc1Type, setOsc1Type] = useState("sawtooth");
  const [osc2Type, setOsc2Type] = useState("sawtooth");

  const [filterFrequency, setFilterFrequency] = useState(1500);
  const [resonance, setResonance] = useState(0);

  const [ampEnvelope, setAmpEnvelope] = useState({
    attack: 0.1,
    decay: 100,
  });

  const [reverbDuration, setReverbDuration] = useState(0.01);
  const [phaserDuration, setPhaserDuration] = useState(0);

  const oscRef1 = useRef(null);
  const oscRef2 = useRef(null);
  const filterRef = useRef(null);
  const resonanceRef = useRef(null);
  const ampEnvRef = useRef(null);
  const revRef = useRef(null);
  const phaserRef = useRef(null);

  function onClickStart() {
    Tone.start();
    oscRef1.current = new Tone.Oscillator(osc1Frequency).start();
    oscRef1.current.type = "sawtooth";
    oscRef2.current = new Tone.Oscillator(osc2Frequency).start();
    oscRef2.current.type = "sawtooth";

    filterRef.current = new Tone.Filter(filterFrequency, "lowpass");
    filterRef.current.Q.value = resonance;
    // resonanceRef.current = new Tone.Filter(resonance.Q);
    ampEnvRef.current = new Tone.AmplitudeEnvelope(ampEnvelope);
    revRef.current = new Tone.Reverb(reverbDuration);
    phaserRef.current = new Tone.Phaser(phaserDuration);

    oscRef1.current.connect(filterRef.current);
    oscRef2.current.connect(filterRef.current);
    // filterRef.current.connect(resonanceRef.current);
    // resonanceRef.current.connect(revRef.current);
    filterRef.current.connect(revRef.current);
    revRef.current.connect(phaserRef.current);
    phaserRef.current.connect(Tone.getDestination());
    Tone.getDestination().volume.value = 30;
  }

  function onClickStop() {
    oscRef1.current.stop();
    oscRef2.current.stop();
  }

  function handleOsc1Type(event) {
    setOsc1Type(event);
  }

  function handleOsc2Type(event) {
    setOsc2Type(event);
  }

  function handleOsc1FrequencyChange(Oscillator1) {
    setOsc1Frequency(Oscillator1); // <=
  }

  function handleOsc2FrequencyChange(Oscillator2) {
    setOsc2Frequency(Oscillator2); // <=
  }

  function handleFilterCutoffChange(CutOff) {
    setFilterFrequency(CutOff);
  }

  function handleFilterResonanceChange(Resonance) {
    setResonance(Resonance);
  }

  function handleAttackChange(event) {
    setAmpEnvelope({ ...ampEnvelope, attack: Number(event.target.value) });
    console.log(event.target.value);
  }

  function handleReverbChange(Reverb) {
    setReverbDuration(Reverb);
  }

  function handlePhaserChange(Phaser) {
    setPhaserDuration(Phaser);
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
    if (filterRef.current) {
      filterRef.current.frequency.value = filterFrequency;
    }
  }, [filterFrequency]);

  useEffect(() => {
    if (resonanceRef.current) {
      resonanceRef.current.Q.value = resonance;
    }
  });

  // useEffect(() => {
  //   if (ampEnvRef.current) {
  //     ampEnvRef.current.attack.value = ampEnvelope;
  //   }
  // }, [ampEnvelope]);

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

  const savedPitch = {
    osc1PitchSave: osc1Frequency,
    osc2PitchSave: osc2Frequency,
  };

  function handleSave() {
    localStorage.setItem(JSON.stringify("Patch"), JSON.stringify(savedPitch));
  }

  function handleLoad() {
    localStorage.getItem(JSON.parse("Tone"));
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
                Oscillator1={osc1Frequency}
                Oscillator2={osc2Frequency}
                changeOsc1Type={handleOsc1Type}
                changeOsc2Type={handleOsc2Type}
                onChangeFreqOsc1={handleOsc1FrequencyChange}
                onChangeFreqOsc2={handleOsc2FrequencyChange}
              />
            </Route>
            <Route path="/filter">
              <FilterBoard
                CutOff={filterFrequency}
                Resonance={resonance}
                onChangeFreq={handleFilterCutoffChange}
                onChangeRes={handleFilterResonanceChange}
              />
            </Route>

            <Route path="/amp">
              <div className="Function-Board">
                <div className="Amp-bar">
                  <h2>SET AMP ENVELOPE</h2>
                </div>{" "}
                <h2> Attack </h2>
                <input
                  value={ampEnvelope.decay} // to local storage 5
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
                Reverb={reverbDuration}
                Phaser={phaserRef}
                onChangeReverb={handleReverbChange}
                onChangePhaser={handlePhaserChange}
              />
            </Route>
          </Switch>

          <Touchpad />
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
        <Footer onClickSave={handleSave} />
      </div>
    </Router>
  );
}
