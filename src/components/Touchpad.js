import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad({ onTouchChange, onTouchStart, onTouchEnd }) {
  const [pointPos, setPointPos] = useState({ x: 15, y: 200 });

  function handlePointerDown() {
    onTouchStart();
  }

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    const domRect = event.target.getBoundingClientRect();
    const coordinates = { x: clientX - domRect.x, y: clientY - domRect.y };

    setPointPos(coordinates);
    onTouchChange(coordinates);
  }

  function handlePointerUp() {
    onTouchEnd();
  }

  return (
    <div
      className="Touchpad"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        className={`box`}
        style={{ top: `${pointPos.y}px`, left: `${pointPos.x}px` }}
      ></div>
    </div>
  );
}
