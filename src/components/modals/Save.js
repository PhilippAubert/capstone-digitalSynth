import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "100px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.9)",
  zIndex: 1000,
};

export default function Load({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button onClick={onClose}> SAVE SOUND </button>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
