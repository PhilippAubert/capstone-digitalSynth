import { useEffect, useRef } from "react";

export default function useReverb(reverbDuration) {
  const revRef = useRef(null);

  useEffect(() => {
    if (revRef.current) {
      revRef.current.decay = reverbDuration;
    }
  }, [reverbDuration]);

  return revRef;
}
