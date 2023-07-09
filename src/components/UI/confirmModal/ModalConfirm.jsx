import React from "react";

import "./ModalConfirm.scss";

export default function ModalConfirm({
  title,
  visibleConfirm,
  setVisibleConfirm,
  confirmFunc,
}) {
  return (
    <div
      className={`modal-confirm ${visibleConfirm && "modal-confirm--active"}`}
      onClick={() => setVisibleConfirm(false)}>
      <div
        className={`modal__content ${visibleConfirm && "modal--active"}`}
        onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-confirm__title">{title}</h2>

        <div className="modal-confirm__btns">
          <button className="btn--green" onClick={confirmFunc}>
            Yes
          </button>

          <button className="btn--red" onClick={() => setVisibleConfirm(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
