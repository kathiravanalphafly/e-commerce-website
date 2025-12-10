import React from "react";
import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">My Account</h1>

      <ul className="space-y-4 text-gray-700">
        <li><Link to="/user" className="hover:text-blue-500">Dashboard</Link></li>
        <li><Link to="/user/orders" className="hover:text-blue-500">My Orders</Link></li>
        <li><Link to="/user/wishlist" className="hover:text-blue-500">Wishlist</Link></li>
        <li><Link to="/user/address" className="hover:text-blue-500">My Address</Link></li>
        <li><Link to="/user/settings" className="hover:text-blue-500">Account Settings</Link></li>
      </ul>
    </div>
  );
}

export default UserSidebar;
