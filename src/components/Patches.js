const savedPatch = {
  osc1Frequency,
  osc1Type,
  osc2Frequency,
  osc2Type,
  filterFrequency,
  filterType,
  resonance,
  reverbDuration,
  phaserDuration,
};

export function handleSave() {
  localStorage.setItem("Patch", JSON.stringify(savedPatch));
}

export function handleLoad() {
  const loadedPatch = JSON.parse(localStorage.getItem("Patch"));
  if (loadedPatch === null) {
    alert("no patch saved yet");
  } else {
    setOsc1Frequency(loadedPatch.osc1Frequency);
    setOsc1Type(loadedPatch.osc1Type);
    setOsc2Frequency(loadedPatch.osc2Frequency);
    setOsc2Type(loadedPatch.osc2Type);
    setFilterFrequency(loadedPatch.filterFrequency);
    setFilterType(loadedPatch.filterType);
    setResonance(loadedPatch.resonance);
    setReverbDuration(loadedPatch.reverbDuration);
    setPhaserDuration(loadedPatch.phaserDuration);
  }
}
