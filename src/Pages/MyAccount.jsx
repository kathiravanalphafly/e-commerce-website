import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/users/userSlice";

function MyAccount() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (!currentUser) return <h2 className="text-center mt-10">Not Logged In</h2>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md w-96">
        <h2 className="text-2xl font-bold mb-3">My Account</h2>

        <p className="mb-4"><strong>Email:</strong> {currentUser.email}</p>

        <button
          className="bg-red-600 text-white w-full py-3 rounded-md"
          onClick={() => dispatch(logoutUser())}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default MyAccount;
