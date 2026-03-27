import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>LAB 3 - Login & Register</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;  