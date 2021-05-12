export function savePatch(patch) {
  localStorage.setItem("Patch", JSON.stringify(patch));
}

export function loadPatch() {
  const loadedPatch = JSON.parse(localStorage.getItem("Patch"));
  return loadedPatch;
}
