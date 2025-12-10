import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders.list);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Order ID</th>
            <th className="p-2">Items</th>
            <th className="p-2">Total</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-2">{order.id}</td>

              <td className="p-2">
                {order.items.map((i) => (
                  <p key={i.id}>
                    {i.title} × {i.quantity}
                  </p>
                ))}
              </td>

              <td className="p-2">₹{order.total}</td>

              <td className="p-2">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
