import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please enter both Email and Password!");
    }

    // Dispatching login data
    dispatch(loginUser({ email, password }));

    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 shadow-lg rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>

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
          placeholder="Enter Password"
          className="border p-3 w-full mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-3 rounded-md"
        >
          Login
        </button>

        <p className="mt-3 text-sm">
          Don’t have an account?{" "}
          <a className="text-blue-600" href="/register">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
