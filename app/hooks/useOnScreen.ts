import { RefObject, useEffect, useMemo, useState } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  // useMemo
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    // observer
    const el = ref?.current;

    if (el) observer.observe(ref.current);

    return () => {
      if (el) observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useOnScreen;
