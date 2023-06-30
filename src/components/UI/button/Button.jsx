import React from "react";
import "./Button.scss";

export default function Button({ children, ...props }) {
    return (
        <button {...props} className="btn btn--blue">
            <span>{children}</span>
        </button>
    );
}
