"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Componente que anima un número desde un valor inicial hasta un valor final.
 * @param {object} props - Propiedades del componente.
 * @param {number} props.from - El número inicial de la animación.
 * @param {number} props.to - El número final de la animación.
 * @param {number} [props.duration=1.5] - La duración de la animación en segundos.
 */
const Counter = ({ from = 0, to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Anima solo una vez cuando es visible

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          ref.current.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{from}</span>;
};

export default Counter;