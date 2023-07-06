import React from "react";
import "./Select.scss";

export default function Select({
  options,
  defaultValue,
  value,
  onChangeSelect,
}) {
  return (
    <select
      className="select"
      value={value}
      onChange={(e) => onChangeSelect(e.target.value)}
    >
      <option className="select__item" value="" disabled>
        {defaultValue}
      </option>

      {options.map((option) => (
        <option
          className="select__item"
          value={option.value}
          key={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
