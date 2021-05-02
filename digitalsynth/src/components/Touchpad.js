import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad() {
  const [pointPos, setPointPos] = useState({ x: 110, y: 90 });

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    setPointPos({ x: clientX, y: clientY });
  }

  return (
    <div className="Touchpad" onPointerMove={handlePointerMove}>
      {pointPos.x},{pointPos.y}
      <div
        className={`absolute box`}
        style={{ top: `${pointPos.y}px`, left: `${pointPos.x}px` }}
      ></div>
    </div>
  );
}
