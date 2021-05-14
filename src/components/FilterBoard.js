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
        <p>SET FILTER </p>

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

      <p className="Filter-Value"> CUTOFF </p>
      <input
        value={cutOff}
        onChange={handleCutoffChange}
        type="range"
        min="0"
        max="2000"
        className="Value"
        step="0.1"
      />

      <p className="Filter-Value"> RESONANCE </p>
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
