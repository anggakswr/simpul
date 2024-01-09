import React, { useRef, useEffect, RefObject, ReactNode } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        // alert("You clicked outside of me!");
        onClickOutside();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props: {
  children: ReactNode;
  onClickOutside: () => void;
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onClickOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
}
