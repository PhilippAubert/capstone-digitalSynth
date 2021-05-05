export default function FilterBoard({
  onChangeFreq,
  onChangeRes,
  filterFrequency,
  resonance,
}) {
  function handleCutoffChange(event) {
    onChangeFreq(Number(event.target.value));
  }

  function handleResonanceChange(event) {
    onChangeRes(Number(event.target.value));
  }

  return (
    <div className="Function-Board">
      <div className="Filter-bar">
        <h2>SET FILTER </h2>
        <h2 className="Filter-Box"> LP </h2>
        <h2 className="Filter-Box"> HP </h2>
      </div>

      <h2> Cutoff </h2>
      <input
        value={filterFrequency} // to local storage 3
        onChange={handleCutoffChange}
        type="range"
        min="0"
        max="1500"
        className="Value"
        step="0.1"
      />

      <h2> Resonance </h2>
      <input
        value={resonance} // to local storage 4
        onChange={handleResonanceChange}
        type="range"
        min="0"
        max="1"
        className="Value"
        step="0.1"
      />
    </div>
  );
}
