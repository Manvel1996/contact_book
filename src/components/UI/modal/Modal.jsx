import React from "react";
import "./Modal.scss";

export default function Modal({ children, visible, setVisible }) {
  return (
    <div
      className={visible ? "modal modal--active" : "modal"}
      onClick={() => setVisible(false)}>
      <div
        className={visible ? "modal__content modal--active" : "modal__content "}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}