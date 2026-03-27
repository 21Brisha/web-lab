import React from "react";

function CustomInput({ label, type, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

export default CustomInput;