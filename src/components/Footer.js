import "./css/Footer.css";
import { Switch, Route, Link } from "react-router-dom";
import Load from "./Load.js";
import Save from "./Save.js";

export default function Footer({
  onClickSave,
  onClickLoad,
  patch,
  setOsc1Frequency,
  setOsc1Type,
  setOsc2Frequency,
  setOsc2Type,
  setFilterFrequency,
  setFilterType,
  setAmpEnvelope,
  setResonance,
  setReverbDuration,
  setPhaserDuration,
}) {
  return (
    <div className="Footer">
      <div className="FooterNav">
        <button className="FooterButton" onClick={onClickLoad}>
          <Link to="load">LOAD</Link>
        </button>

        <button className="FooterButton" onClick={onClickSave}>
          <Link to="save">SAVE</Link>
        </button>

        <Switch>
          <Route path="/load">
            <Load
              setOsc1Frequency={setOsc1Frequency}
              setOsc1Type={setOsc1Type}
              setOsc2Frequency={setOsc2Frequency}
              setOsc2Type={setOsc2Type}
              setFilterFrequency={setFilterFrequency}
              setFilterType={setFilterType}
              setAmpEnvelope={setAmpEnvelope}
              setResonance={setResonance}
              setReverbDuration={setReverbDuration}
              setPhaserDuration={setPhaserDuration}
            />
          </Route>
          <Route path="/save">
            <Save patch={patch} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
