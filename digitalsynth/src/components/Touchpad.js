import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad() {
  const [pointPos, setPointPos] = useState({ x: 0, y: 0 });

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    setPointPos({ x: clientX, y: clientY });
  }

  return (
    <div className="Touchpad" onPointerMove={handlePointerMove}>
      {pointPos.x},{pointPos.y}
      <div
        className={`absolute box`}
        style={{ top: `${pointPos.y - 515}px`, left: `${pointPos.x - 145}px` }}
      ></div>
    </div>
  );
}
