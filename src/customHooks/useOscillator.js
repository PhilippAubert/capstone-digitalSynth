import { useEffect, useRef } from "react";

export default function useOscillator(frequency, type) {
  const oscRef = useRef(null);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.frequency.value = frequency;
    }
  }, [frequency]);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.type = type;
    }
  }, [type]);

  return oscRef;
}
