import "./css/Effects.css";

export default function Effects({
  reverb,
  phaser,
  onChangeReverb,
  onChangePhaser,
}) {
  function handleReverbChange(event) {
    onChangeReverb(Number(event.target.value));
  }

  function handlePhaserChange(event) {
    onChangePhaser(Number(event.target.value));
  }

  return (
    <div className="Function-Board">
      <div className="Effects-Bar">
        <p className="Effects-Headline">SET AUDIO EFFECTS</p>
      </div>{" "}
      <p className="Effect-Value"> REVERB </p>
      <input
        value={reverb}
        onChange={handleReverbChange}
        type="range"
        min="0.1"
        max="10"
        className="Value"
        step="1"
      />
      <p className="Effect-Value"> PHASER </p>
      <input
        value={phaser}
        onChange={handlePhaserChange}
        type="range"
        min="0"
        max="10"
        step="0.1"
        className="Value"
      />
    </div>
  );
}
