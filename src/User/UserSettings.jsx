import React from "react";

function UserSettings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <div className="bg-white p-4 rounded shadow">
        <p>Name: Kathiravan</p>
        <p>Email: user@gmail.com</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserSettings;
