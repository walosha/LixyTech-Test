import React from "react";
import "./Input.css";

export default function Input({ onchange, error }) {
  return (
    <div className="inputContainer">
      <input type="text" onChange={onchange} />
      {error ? (
        <p className="error">
          This is not a valid Number, please enter a valid number!
        </p>
      ) : null}
    </div>
  );
}
