import { useEffect, useRef } from "react";

export default function usePrevious(item) {
  const ref = useRef();
  useEffect(() => {
    ref.current = item;
  },[item]);
  return ref.current;
}
