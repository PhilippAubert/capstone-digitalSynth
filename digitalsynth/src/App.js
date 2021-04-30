import "./App.css";
import Header from "./components/Header.js";
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
  const [osc2Frequency, setOsc2Frequency] = useState(220);
  const [filterFrequency, setFilterFrequency] = useState(1000);
  const [ampEnvelope, setAmpEnvelope] = useState(100);

  const envRef = useRef(null);
  const oscRef1 = useRef(null);
  const oscRef2 = useRef(null);

  const filterRef = useRef(null);

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
    if (envRef.current) {
      envRef.current.attack.value = ampEnvelope;
    }
  }, [ampEnvelope]);

  function onClickStart() {
    Tone.start();
    oscRef1.current = new Tone.Oscillator(osc1Frequency, "square");
    oscRef2.current = new Tone.Oscillator(osc2Frequency, "square");
    filterRef.current = new Tone.Filter(filterRef.current, "lowpass");
    envRef.current = new Tone.Envelope(envRef.current, "linear");

    oscRef1.current.connect(filterRef.current);
    oscRef2.current.connect(filterRef.current);
    filterRef.current.connect(envRef.current);
    envRef.current.connect(Tone.getDestination());

    oscRef1.current.start();
    oscRef2.current.start();
  }

  function onClickStop() {
    oscRef1.current.stop();
    oscRef2.current.stop();
  }

  function handleOsc1FrequencyChange(event) {
    setOsc1Frequency(Number(event.target.value));
  }

  function handleOsc2FrequencyChange(event) {
    setOsc2Frequency(Number(event.target.value));
  }

  function handleFilterCutoffChange(event) {
    setFilterFrequency(Number(event.target.value));
  }

  function handleAmpEnvelope(event) {
    setAmpEnvelope(Number(event.target.value));
  }

  return (
    <div className="App">
      <header className="App-Header">
        <Header />
      </header>
      <main className="App-Main">
        <Router>
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
          </nav>

          <Switch>
            <Route path="/oscillator">
              {" "}
              <div className="Function-Board">
                <h2>Set Oscillator</h2>

                <div className="Vco-bar">
                  <h2>OSC 1</h2>
                  <div className="Icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 980.005 711.671"
                    >
                      <g
                        id="_200dcc9090c0a9981b86ad4e70f6f74c"
                        data-name="200dcc9090c0a9981b86ad4e70f6f74c"
                        transform="translate(-10 -144.169)"
                      >
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(0 511)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M36.01-365c-10.4,3-17.21,8.6-21.81,18.21l-4.2,8.6V-10.68c0,273.69.4,328.71,2.8,334.11,3.2,7.8,12.2,16.41,19.81,19.21,4,1.6,146.05,2.2,467.76,2.2,383.53,0,463.15-.4,468.55-2.8,8.6-3.4,19.01-15.6,20.41-23.61.6-3.6.8-153.85.6-333.91l-.6-327.11-5.4-8.2a38.494,38.494,0,0,0-13-11.8c-7.4-3.8-19.61-3.8-467.75-4.2C201.86-367,40.61-366.4,36.01-365ZM398.53-75.9l.6,211.67L500.96-75.9,602.8-287.37h63.42l.2,212.47V137.77l8-16.01c4.4-8.8,48.82-104.23,98.63-212.07l90.63-196.06,31.21-.6c17.41-.2,31.41.2,31.41,1,0,1-58.42,125.44-129.84,276.69L666.62,265.81H603.2l-1-211.67-1-211.47L499.16,54.74,397.13,266.81H334.11l-.4-213.07-.6-213.27L234.67,53.14,136.24,265.81l-31.41.6c-29.21.4-31.21.2-30.21-3,.8-3.4,249.68-531.78,256.49-544.78l3.2-6h63.82Z"
                          />
                        </g>
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 143.937 81.359"
                    >
                      <g
                        id="_8c54389548b4d9e831e8df59dd38f593"
                        data-name="8c54389548b4d9e831e8df59dd38f593"
                        transform="translate(-10 -144.169)"
                      >
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(10 144.169)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M13.82-366.622a4.623,4.623,0,0,0-3.2,2.082l-.617.983v37.441c0,31.289.059,37.579.411,38.2a5.385,5.385,0,0,0,2.91,2.2c.587.183,21.451.252,68.7.252,56.331,0,68.025-.046,68.818-.32a5.111,5.111,0,0,0,3-2.7c.088-.412.117-17.588.088-38.173l-.088-37.4-.793-.937a5.4,5.4,0,0,0-1.909-1.349c-1.087-.434-2.88-.434-68.7-.48C38.179-366.85,14.5-366.782,13.82-366.622Zm72.873,36.893v28.018h48.778v-24.5l4.643.069,4.613.069.088,15.851.059,15.828H77.29v-56.264H28.512v24.472h-9.4v-31.564H86.695v28.019Z"
                            transform="translate(-10 366.831)"
                          />
                        </g>
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 102.795 57.906"
                    >
                      <g id="sine" transform="translate(-10 -144.169)">
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(10 144.169)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M12.728-366.682a3.3,3.3,0,0,0-2.288,1.482l-.441.7v26.648c0,22.269.042,26.746.294,27.185a3.845,3.845,0,0,0,2.078,1.563c.42.13,15.32.179,49.064.179,40.229,0,48.581-.033,49.147-.228a3.645,3.645,0,0,0,2.141-1.921c.063-.293.084-12.518.063-27.169l-.063-26.616-.566-.667a3.86,3.86,0,0,0-1.364-.96c-.776-.309-2.057-.309-49.063-.342C30.125-366.845,13.211-366.8,12.728-366.682Zm30.954,6.561c8.142,1.335,15.844,9.2,20.566,21.016,2.623,6.561,5.415,11.037,9.087,14.57a14.863,14.863,0,0,0,5.289,3.387,7.265,7.265,0,0,0,3.588.586,7.307,7.307,0,0,0,3.672-.635c3.274-1.253,6.8-4.509,9.674-8.954a55.957,55.957,0,0,0,3.735-6.9l.357-.846h3.232c2.938,0,3.232.033,3.232.277a47.913,47.913,0,0,1-3.274,7.163c-4.68,8.35-10.661,13.478-17.293,14.813a22.947,22.947,0,0,1-6.505.065,23.372,23.372,0,0,1-6.065-2.279c-5.834-3.369-11.249-10.516-14.627-19.307-2.414-6.3-6.463-12.242-10.346-15.237-3.735-2.881-7.366-3.516-11.312-2-4.511,1.726-9.4,7.456-12.864,15.123l-.587,1.3-3.274.049c-2.812.033-3.253,0-3.253-.212a16.9,16.9,0,0,1,.86-2.247c3.567-8.269,8.919-14.846,14.543-17.841a21.2,21.2,0,0,1,5.456-1.889A21.327,21.327,0,0,1,43.682-360.121Z"
                            transform="translate(-10 366.831)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="440"
                  value={osc1Frequency}
                  onChange={handleOsc1FrequencyChange}
                  className="Value"
                />

                <div className="Vco-bar">
                  <h2>OSC 2</h2>
                  <div className="Icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 980.005 711.671"
                    >
                      <g
                        id="_200dcc9090c0a9981b86ad4e70f6f74c"
                        data-name="200dcc9090c0a9981b86ad4e70f6f74c"
                        transform="translate(-10 -144.169)"
                      >
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(0 511)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M36.01-365c-10.4,3-17.21,8.6-21.81,18.21l-4.2,8.6V-10.68c0,273.69.4,328.71,2.8,334.11,3.2,7.8,12.2,16.41,19.81,19.21,4,1.6,146.05,2.2,467.76,2.2,383.53,0,463.15-.4,468.55-2.8,8.6-3.4,19.01-15.6,20.41-23.61.6-3.6.8-153.85.6-333.91l-.6-327.11-5.4-8.2a38.494,38.494,0,0,0-13-11.8c-7.4-3.8-19.61-3.8-467.75-4.2C201.86-367,40.61-366.4,36.01-365ZM398.53-75.9l.6,211.67L500.96-75.9,602.8-287.37h63.42l.2,212.47V137.77l8-16.01c4.4-8.8,48.82-104.23,98.63-212.07l90.63-196.06,31.21-.6c17.41-.2,31.41.2,31.41,1,0,1-58.42,125.44-129.84,276.69L666.62,265.81H603.2l-1-211.67-1-211.47L499.16,54.74,397.13,266.81H334.11l-.4-213.07-.6-213.27L234.67,53.14,136.24,265.81l-31.41.6c-29.21.4-31.21.2-30.21-3,.8-3.4,249.68-531.78,256.49-544.78l3.2-6h63.82Z"
                          />
                        </g>
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 143.937 81.359"
                    >
                      <g
                        id="_8c54389548b4d9e831e8df59dd38f593"
                        data-name="8c54389548b4d9e831e8df59dd38f593"
                        transform="translate(-10 -144.169)"
                      >
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(10 144.169)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M13.82-366.622a4.623,4.623,0,0,0-3.2,2.082l-.617.983v37.441c0,31.289.059,37.579.411,38.2a5.385,5.385,0,0,0,2.91,2.2c.587.183,21.451.252,68.7.252,56.331,0,68.025-.046,68.818-.32a5.111,5.111,0,0,0,3-2.7c.088-.412.117-17.588.088-38.173l-.088-37.4-.793-.937a5.4,5.4,0,0,0-1.909-1.349c-1.087-.434-2.88-.434-68.7-.48C38.179-366.85,14.5-366.782,13.82-366.622Zm72.873,36.893v28.018h48.778v-24.5l4.643.069,4.613.069.088,15.851.059,15.828H77.29v-56.264H28.512v24.472h-9.4v-31.564H86.695v28.019Z"
                            transform="translate(-10 366.831)"
                          />
                        </g>
                      </g>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="15"
                      viewBox="0 0 102.795 57.906"
                    >
                      <g id="sine" transform="translate(-10 -144.169)">
                        <g
                          id="Gruppe_1"
                          data-name="Gruppe 1"
                          transform="translate(10 144.169)"
                        >
                          <path
                            id="Pfad_1"
                            data-name="Pfad 1"
                            d="M12.728-366.682a3.3,3.3,0,0,0-2.288,1.482l-.441.7v26.648c0,22.269.042,26.746.294,27.185a3.845,3.845,0,0,0,2.078,1.563c.42.13,15.32.179,49.064.179,40.229,0,48.581-.033,49.147-.228a3.645,3.645,0,0,0,2.141-1.921c.063-.293.084-12.518.063-27.169l-.063-26.616-.566-.667a3.86,3.86,0,0,0-1.364-.96c-.776-.309-2.057-.309-49.063-.342C30.125-366.845,13.211-366.8,12.728-366.682Zm30.954,6.561c8.142,1.335,15.844,9.2,20.566,21.016,2.623,6.561,5.415,11.037,9.087,14.57a14.863,14.863,0,0,0,5.289,3.387,7.265,7.265,0,0,0,3.588.586,7.307,7.307,0,0,0,3.672-.635c3.274-1.253,6.8-4.509,9.674-8.954a55.957,55.957,0,0,0,3.735-6.9l.357-.846h3.232c2.938,0,3.232.033,3.232.277a47.913,47.913,0,0,1-3.274,7.163c-4.68,8.35-10.661,13.478-17.293,14.813a22.947,22.947,0,0,1-6.505.065,23.372,23.372,0,0,1-6.065-2.279c-5.834-3.369-11.249-10.516-14.627-19.307-2.414-6.3-6.463-12.242-10.346-15.237-3.735-2.881-7.366-3.516-11.312-2-4.511,1.726-9.4,7.456-12.864,15.123l-.587,1.3-3.274.049c-2.812.033-3.253,0-3.253-.212a16.9,16.9,0,0,1,.86-2.247c3.567-8.269,8.919-14.846,14.543-17.841a21.2,21.2,0,0,1,5.456-1.889A21.327,21.327,0,0,1,43.682-360.121Z"
                            transform="translate(-10 366.831)"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                <input
                  value={osc2Frequency}
                  onChange={handleOsc2FrequencyChange}
                  type="range"
                  min="0"
                  max="440"
                  className="Value"
                />
              </div>
            </Route>
            <Route path="/filter">
              <div className="Function-Board">
                <div className="Filter-bar">
                  <h2>Filter </h2>
                  <h2 className="Filter-Box"> LP </h2>
                  <h2 className="Filter-Box"> HP </h2>
                </div>
                <h2> Cutoff </h2>
                <input
                  value={filterFrequency}
                  onChange={handleFilterCutoffChange}
                  type="range"
                  min="0"
                  max="1000"
                  className="Value"
                />
                <h2> Resonance </h2>
                <input type="range" min="0" max="880" className="Value" />
              </div>
            </Route>

            <Route path="/amp">
              <div className="Function-Board">
                <div className="Amp-bar">
                  <h2>Set Amp Envelope</h2>
                </div>{" "}
                <h2> Attack </h2>
                <input
                  value={ampEnvelope}
                  onChange={handleAmpEnvelope}
                  type="range"
                  min="0"
                  max="100"
                  className="Value"
                />
                <h2> Release </h2>
                <input type="range" min="0" max="100" className="Value" />
              </div>
            </Route>
          </Switch>
        </Router>

        <Touchpad />

        <button onClick={onClickStart}> Start </button>
        <button onClick={onClickStop}> Stop </button>
      </main>
      <footer className="App-Footer">
        <Footer />
      </footer>
    </div>
  );
}
