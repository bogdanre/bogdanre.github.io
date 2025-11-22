import { useEffect, useRef } from "react";
import { animate, createScope, spring, createDraggable, steps } from 'animejs';


export default function AnimatedSlot({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    animate(ref.current, {
      translateX: ["-1000", "0"],
    //   x: '100cqh',
    // rotate: '1turn',
      opacity: [0.8, 1],
      duration: 1000,
      ease: 'outBack(1.7)'
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
