import { useState } from "react";
import "./css/Touchpad.css";

export default function Touchpad() {
  const [pointPos, setPointPos] = useState({ left: 0, top: 0 });

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    const domRect = event.target.getBoundingClientRect();

    setPointPos({ x: clientX - domRect.x, y: clientY - domRect.y });
    console.log({ x: clientX - domRect.x, y: clientY - domRect.y });
  }

  return (
    <div className="Touchpad" onMouseMove={handlePointerMove}>
      <div
        className={`box`}
        style={{ top: `${pointPos.y}px`, left: `${pointPos.x}px` }}
      ></div>
    </div>
  );
}
