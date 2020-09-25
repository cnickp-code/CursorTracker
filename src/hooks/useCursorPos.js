import { useState, useEffect } from "react";

const useCursorPos = () => {
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  const updateCursorPos = event => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPos);

    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, []);

  return mousePos;
};

export default useCursorPos;