import React from "react";

export default function Input({ onchange }) {
  return (
    <input
      style={{ marginBottom: 20, display: "flex", alignSelf: "center" }}
      type="text"
      onChange={onchange}
    />
  );
}
