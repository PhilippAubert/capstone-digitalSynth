import { useState } from "react";

export function useSavePatch(patch) {
  const [savedPatches, setSavedPatches] = useState(loadPatch());
  savedPatches.push(patch);
  localStorage.setItem("Patches", JSON.stringify(patch));
}

export function loadPatch() {
  const loadedPatch = JSON.parse(localStorage.getItem("Patch"));
  return loadedPatch;
}
