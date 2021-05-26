import { useEffect, useRef } from "react";

export default function usePhaser(phaserDuration) {
  const phaserRef = useRef(null);

  useEffect(() => {
    if (phaserRef.current) {
      phaserRef.current.frequency.value = phaserDuration;
    }
  }, [phaserDuration]);

  return phaserRef;
}
