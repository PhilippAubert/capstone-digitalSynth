import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad() {
  const [pointPos, setPointPos] = useState({ x: 0, y: 0 });

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    setPointPos({ x: clientX, y: clientY });
  }

  return (
    <div className="Touchpad">
      {pointPos.x},{pointPos.y}
      <div
        onPointerMove={handlePointerMove}
        className={`absolute box`}
        style={{ top: `${pointPos.y}px`, left: `${pointPos.x}px` }}
      ></div>
    </div>
  );
}
