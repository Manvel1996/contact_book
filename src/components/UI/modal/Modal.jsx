import React from "react";
import "./Modal.scss";

export default function Modal({ children, visible, setVisible }) {
  return (
    <div
      className={`modal ${visible && "modal--active"}`}
      onClick={() => setVisible(false)}>
      <div
        className={`modal__content  ${visible && "modal--active"}`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
