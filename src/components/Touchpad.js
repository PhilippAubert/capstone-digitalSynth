import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad({ onTouchChange, onTouchStart, onTouchEnd }) {
  const [pointPos, setPointPos] = useState({ x: 15, y: 200 });
  const [isTouchpadPressed, setIsTouchpadPressed] = useState(false);

  function handlePointerDown() {
    if (isTouchpadPressed === false) {
      onTouchStart();
      setIsTouchpadPressed(true);
    }
  }

  function handlePointerMove(event) {
    if (isTouchpadPressed) {
      const { clientX, clientY } = event;
      const domRect = event.target.getBoundingClientRect();
      const coordinates = { x: clientX - domRect.x, y: clientY - domRect.y };
      if (coordinates.x < 0) {
        coordinates.x = 0;
      }
      if (coordinates.y < 0) {
        coordinates.y = 0;
      }
      if (coordinates.x > 200) {
        coordinates.x = 200;
      }
      if (coordinates.y > 200) {
        coordinates.y = 200;
      }

      setPointPos(coordinates);
      onTouchChange(coordinates);
    }
  }

  function handlePointerUp() {
    if (isTouchpadPressed === true) {
      onTouchEnd();
      setIsTouchpadPressed(false);
    }
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
