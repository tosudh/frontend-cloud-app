import React from "react";
import { Routes, Route } from "react-router-dom";
import Base from "./Components/Base/Base";
import Main from "./Components/Main/Main";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Forgot from "./Components/Auth/Forgot";
import Otp from "./Components/Auth/Otp";
import ChangePassword from "./Components/Auth/ChangePassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/app" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="verify-otp" element={<Otp />} />
        <Route path="set-password" element={<ChangePassword />} />
        <Route path="/*" element={<h1>All Routes</h1>} />
      </Routes>
    </>
  );
}

export default App;
