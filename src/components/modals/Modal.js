import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, open }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      {" "}
      <h2>Save a sound</h2>
      <label for="name">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="18"
        size="10"
      ></input>
      <button>SAVE</button>
      {children}
    </div>,
    document.getElementById("portal")
  );
}
