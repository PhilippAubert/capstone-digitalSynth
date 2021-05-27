import { useEffect, useRef } from "react";

export default function useAmpEnv(ampEnvelope) {
  const ampEnvRef = useRef(null);

  useEffect(() => {
    if (ampEnvRef.current) {
      ampEnvRef.current.attack = ampEnvelope.attack;
    }
  }, [ampEnvelope]);

  useEffect(() => {
    if (ampEnvRef.current) {
      ampEnvRef.current.decay = ampEnvelope.decay;
    }
  }, [ampEnvelope]);

  return ampEnvRef;
}
