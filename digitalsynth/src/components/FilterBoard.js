export default function FilterBoard({
  onChangeFreq,
  onChangeRes,
  filterFrequency,
  resonance,
  onChangeFilterType,
}) {
  function handleCutoffChange(event) {
    onChangeFreq(Number(event.target.value));
  }

  function handleResonanceChange(event) {
    onChangeRes(Number(event.target.value));
  }

  function changeFilterType(event) {
    onChangeFilterType(event.currentTarget.id);
  }

  return (
    <div className="Function-Board">
      <div className="Filter-bar">
        <h2>SET FILTER </h2>
        <button id="lowpass" onClick={changeFilterType}>
          <h2 className="Filter-Box"> LP </h2>
        </button>
        <button id="highpass" onClick={changeFilterType}>
          <h2 className="Filter-Box"> HP </h2>
        </button>
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
        max="100"
        className="Value"
        step="0.1"
      />
    </div>
  );
}
