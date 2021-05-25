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
        <h2 className="Effects-Headline">SET EFFECTS</h2>
      </div>
      <label className="Effect-Label"> REVERB </label>
      <input
        value={reverb}
        onChange={handleReverbChange}
        type="range"
        min="0.1"
        max="10"
        className="Value"
        step="0.1"
      />
      <label className="Effect-Label"> PHASER </label>
      <input
        value={phaser}
        onChange={handlePhaserChange}
        type="range"
        min="0"
        max="10"
        step="0.01"
        className="Value"
      />
    </div>
  );
}
