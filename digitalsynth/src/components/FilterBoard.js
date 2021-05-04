export default function FilterBoard({ onChange, filterFrequency }) {
  function handleCutoffChange(event) {
    onChange(Number(event.target.value));
  }

  function handleResonanceChange(event) {
    onChange(Number(event.target.value));
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
        value={filterFrequency.frequency} // to local storage 3
        onChange={handleCutoffChange}
        type="range"
        min="0"
        max="1500"
        className="Value"
      />
      <h2> Resonance </h2>
      <input
        value={filterFrequency.Q} // to local storage 4
        onChange={handleResonanceChange}
        type="range"
        min="0"
        max="20"
        className="Value"
        step="0.1"
      />
    </div>
  );
}
