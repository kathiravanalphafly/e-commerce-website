import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <ul className="space-y-4">
        <li><Link to="/admin" className="hover:text-gray-400">Dashboard</Link></li>
        <li><Link to="/admin/products" className="hover:text-gray-400">Manage Products</Link></li>
        <li><Link to="/admin/add-product" className="hover:text-gray-400">Add Product</Link></li>
        <li><Link to="/admin/orders" className="hover:text-gray-400">Orders</Link></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
