import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      return alert("Please enter both Email and Password!");
    }

    // Dispatch new user data
    dispatch(registerUser({ email, password }));

    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 shadow-lg rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="bg-green-600 text-white w-full py-3 rounded-md"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
