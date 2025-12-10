import React from "react";
import { useSelector } from "react-redux";
import { 
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell,
} from "recharts";

function DashboardHome() {
  const orders = useSelector((state) => state.orders.list);

  // If you have users in Redux, replace this
  const users = []; // dummy for now

  // ===================== DATA FOR CHARTS =====================
  const salesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 18000 },
    { month: "Mar", sales: 22000 },
    { month: "Apr", sales: 17000 },
    { month: "May", sales: 26000 },
    { month: "Jun", sales: 30000 },
  ];

  const orderData = [
    { day: "Mon", orders: 12 },
    { day: "Tue", orders: 19 },
    { day: "Wed", orders: 14 },
    { day: "Thu", orders: 22 },
    { day: "Fri", orders: 30 },
    { day: "Sat", orders: 17 },
    { day: "Sun", orders: 10 },
  ];

  const categoryData = [
    { name: "GPU", value: 45 },
    { name: "Laptop", value: 25 },
    { name: "Monitor", value: 15 },
    { name: "Power Supply", value: 15 },
  ];

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

  // ===================== TOTAL EARNINGS =====================
  const totalEarnings = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="p-6">

      {/* ================= DASHBOARD TITLE ================= */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        {/* TOTAL ORDERS */}
        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">{orders.length}</p>
        </div>

        {/* TOTAL USERS */}
        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">{users.length}</p>
        </div>

        {/* TOTAL EARNINGS */}
        <div className="bg-white p-6 shadow rounded text-center">
          <h2 className="text-xl font-semibold">Total Earnings</h2>
          <p className="text-3xl font-bold mt-2">₹{totalEarnings}</p>
        </div>
      </div>

      {/* ================= CHARTS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* ========= Sales Line Chart ========= */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Monthly Sales</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ========= Orders Bar Chart ========= */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Weekly Orders</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ========= Category Pie Chart ========= */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Product Categories</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {categoryData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

export default DashboardHome;
