import "./css/FilterBoard.css";

export default function FilterBoard({
  onChangeFreq,
  onChangeRes,
  cutOff,
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

        <button
          id="lowpass"
          onClick={changeFilterType}
          className="FilterButton"
        >
          <p className="Filter-Box"> LP </p>
        </button>
        <button
          id="highpass"
          onClick={changeFilterType}
          className="FilterButton"
        >
          <p className="Filter-Box"> HP </p>
        </button>
      </div>

      <label className="Filter-label"> CUTOFF </label>
      <input
        value={cutOff}
        onChange={handleCutoffChange}
        type="range"
        min="0"
        max="2000"
        className="Value"
        step="0.1"
      />

      <label className="Filter-label"> RESONANCE </label>
      <input
        value={resonance}
        onChange={handleResonanceChange}
        type="range"
        min="0"
        max="50"
        className="Value"
        step="0.1"
      />
    </div>
  );
}
