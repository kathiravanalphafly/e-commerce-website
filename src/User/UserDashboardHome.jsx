import React from "react";

function UserDashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white shadow rounded">Total Orders: 6</div>
        <div className="p-6 bg-white shadow rounded">Wishlist: 3</div>
        <div className="p-6 bg-white shadow rounded">Address Saved: 2</div>
      </div>
    </div>
  );
}

export default UserDashboardHome;
