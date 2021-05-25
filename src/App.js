import "./App.css";
import Header from "./components/Header.js";
import Oscillators from "./components/Oscillators.js";
import FilterBoard from "./components/FilterBoard.js";
import Amp from "./components/Amp.js";
import Effects from "./components/Effects.js";
import Touchpad from "./components/Touchpad.js";
import Footer from "./components/Footer.js";
import Load from "./components/Load.js";
import Save from "./components/Save.js";

import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
} from "react-router-dom";

export default function App() {
  const [patch, setPatch] = useState({
    osc1Frequency: 220,
    osc1Type: "sawtooth",
    osc2Frequency: 220,
    osc2Type: "sawtooth",
    filterFrequency: 1500,
    resonance: 0.01,
    filterType: "lowpass",
    ampEnvelope: {
      attack: 0,
      decay: 0,
      sustain: 0,
      release: 0,
    },
    reverbDuration: 0.001,
    phaserDuration: 0.01,
  });

  function changePatch(key, value) {
    setPatch((patch) => ({
      ...patch,
      [key]: value,
    }));
  }

  const {
    osc1Frequency,
    osc1Type,
    osc2Frequency,
    osc2Type,
    filterFrequency,
    resonance,
    filterType,
    ampEnvelope,
    reverbDuration,
    phaserDuration,
  } = patch;

  const [active, setActive] = useState(false);
  const label = !active ? "OFF" : "ON";

  const oscRef1 = useRef(null);
  const oscRef2 = useRef(null);
  const filterRef = useRef(null);
  const ampEnvRef = useRef(null);
  const revRef = useRef(null);
  const phaserRef = useRef(null);

  function handleStartEngine() {
    setActive(!active);

    Tone.start();
    oscRef1.current = new Tone.Oscillator(osc1Frequency);
    oscRef1.current.type = osc1Type;
    oscRef2.current = new Tone.Oscillator(osc2Frequency);
    oscRef2.current.type = osc2Type;

    filterRef.current = new Tone.Filter(filterFrequency);
    filterRef.current.type = filterType;
    filterRef.current.Q.value = resonance;
    ampEnvRef.current = new Tone.AmplitudeEnvelope(ampEnvelope);

    revRef.current = new Tone.Reverb(reverbDuration);
    phaserRef.current = new Tone.Phaser(phaserDuration);

    oscRef1.current.connect(ampEnvRef.current);
    oscRef2.current.connect(ampEnvRef.current);
    ampEnvRef.current.chain(
      filterRef.current,
      revRef.current,
      phaserRef.current,
      Tone.getDestination()
    );

    oscRef1.current.start();
    oscRef2.current.start();
  }

  function handleTouchStart() {
    if (ampEnvRef.current) {
      ampEnvRef.current.triggerAttack(Tone.now());
    }
  }

  function handleTouchStop() {
    if (ampEnvRef.current) {
      ampEnvRef.current.triggerRelease(Tone.now());
    }
  }

  function createChangePatch(key) {
    return (value) => {
      changePatch(key, value);
    };
  }

  function handleAmpAttackChange(attack) {
    const value = { ...ampEnvelope, attack };
    changePatch("ampEnvelope", value);
  }

  function handleAmpDecayChange(decay) {
    const value = { ...ampEnvelope, decay };
    changePatch("ampEnvelope", value);
  }

  function handleTouchChange(coordinates) {
    changePatch("osc1Frequency", coordinates.y);
    changePatch("osc2Frequency", coordinates.x);
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
    if (filterRef.current) {
      filterRef.current.Q.value = resonance;
    }
  }, [resonance]);

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.type = filterType;
    }
  }, [filterType]);

  useEffect(() => {
    if (ampEnvRef.current) {
      ampEnvRef.current.attack = ampEnvelope.attack;
    }
  }, [ampEnvelope]);

  useEffect(() => {
    if (ampEnvRef.current) {
      ampEnvRef.current.decay = ampEnvelope.decay;
    }
  }, [ampEnvelope]);

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

  return (
    <Router>
      <div className="App">
        <header className="App-Header">
          <button
            className={!active ? "Start-Button" : "Start-Button-Active"}
            onClick={handleStartEngine}
          >
            {label}
          </button>
          <Header />
        </header>
        <main className="App-Main">
          <nav className="Nav-Bar">
            <NavLink
              className="Slider"
              activeClassName="Slider-Active"
              exact
              to="/"
            >
              <h2 className="Nav-Bar-Font"> VCO </h2>
            </NavLink>
            <NavLink
              className="Slider"
              activeClassName="Slider-Active"
              to="/filter"
            >
              <h2 className="Nav-Bar-Font"> VCF </h2>
            </NavLink>
            <NavLink
              className="Slider"
              activeClassName="Slider-Active"
              to="/amp"
            >
              <h2 className="Nav-Bar-Font"> VCA </h2>
            </NavLink>
            <NavLink
              className="Slider"
              activeClassName="Slider-Active"
              to="/vfx"
            >
              <h2 className="Nav-Bar-Font"> EFX </h2>
            </NavLink>
          </nav>

          <Switch>
            <Route exact path="/">
              <Oscillators
                oscillator1={osc1Frequency}
                oscillator2={osc2Frequency}
                osc1Type={osc1Type}
                osc2Type={osc2Type}
                onChangeOsc1Type={createChangePatch("osc1Type")}
                onChangeOsc2Type={createChangePatch("osc2Type")}
                onChangeFreqOsc1={createChangePatch("osc1Frequency")}
                onChangeFreqOsc2={createChangePatch("osc2Frequency")}
              />
            </Route>
            <Route path="/filter">
              <FilterBoard
                cutOff={filterFrequency}
                resonance={resonance}
                filterType={filterType}
                onChangeFreq={createChangePatch("filterFrequency")}
                onChangeRes={createChangePatch("resonance")}
                onChangeFilterType={createChangePatch("filterType")}
              />
            </Route>

            <Route path="/amp">
              <Amp
                attack={ampEnvelope.attack}
                decay={ampEnvelope.decay}
                onChangeAttack={handleAmpAttackChange}
                onChangeDecay={handleAmpDecayChange}
              />
            </Route>
            <Route path="/vfx">
              <Effects
                reverb={reverbDuration}
                phaser={phaserDuration}
                onChangeReverb={createChangePatch("reverbDuration")}
                onChangePhaser={createChangePatch("phaserDuration")}
              />
            </Route>
          </Switch>

          <Touchpad
            onTouchChange={handleTouchChange}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchStop}
          />
        </main>
        <Footer>
          <Switch>
            <Route path="/load">
              <Load onPatchLoad={setPatch} />
            </Route>
            <Route path="/save">
              <Save patch={patch} />
            </Route>
          </Switch>
        </Footer>
      </div>
    </Router>
  );
}
