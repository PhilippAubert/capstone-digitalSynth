import { useState } from "react";

export function useSavePatch(patch) {
  const [savedPatches, setSavedPatches] = useState(loadPatch());
}

export function loadPatch() {
  return loadedPatch;
}
