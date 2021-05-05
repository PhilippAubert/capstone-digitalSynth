export default function Effects({
  reverbDuration,
  phaserDuration,
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
      <div className="Amp-bar">
        <h2>SET AUDIO EFFECTS</h2>
      </div>{" "}
      <h2> Reverb </h2>
      <input
        value={reverbDuration} // to local storage 6
        onChange={handleReverbChange}
        type="range"
        min="0.1"
        max="10"
        className="Value"
        step="1"
      />
      <h2> Phaser </h2>
      <input
        value={phaserDuration} // to local storage 7
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
