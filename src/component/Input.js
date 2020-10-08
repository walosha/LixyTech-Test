import React from "react";

export default function Input({ onchange, error }) {
  return (
    <div
      style={{
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
      }}
    >
      <input type="text" onChange={onchange} />
      {error && (
        <p style={{ color: "red" }}>
          This is not a valid Number, please enter a valid number!
        </p>
      )}
    </div>
  );
}
