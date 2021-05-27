import { useEffect, useRef } from "react";

export default function useFilter(frequency, type, resonance) {
  let filterRef = useRef(null);

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.frequency.value = frequency;
    }
  }, [frequency]);

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.type = type;
    }
  }, [type]);

  useEffect(() => {
    if (filterRef.current) {
      filterRef.current.Q.value = resonance;
    }
  }, [resonance]);

  return filterRef;
}
