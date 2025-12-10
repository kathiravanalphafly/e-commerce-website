import React from "react";
import { useSelector } from "react-redux";

function UserOrders() {
  const orders = useSelector((state) => state.orders.list);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-5 rounded-xl shadow border"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Order #{order.id}
                </h2>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>
              </div>

              {/* Order Details */}
              <p className="text-gray-600">
                <strong>Date:</strong> {order.date}
              </p>

              <p className="text-gray-600">
                <strong>Total Amount:</strong> ₹{order.total}
              </p>

              <p className="text-gray-600">
                <strong>Payment:</strong> {order.payment.toUpperCase()}
              </p>

              {/* Items */}
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Items:</h3>
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b py-2 text-sm"
                  >
                    <span>{item.title}</span>
                    <span>
                      Qty {item.quantity} × ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tracking History */}
              <div className="mt-5">
                <h3 className="font-semibold mb-2">Tracking History:</h3>

                <div className="space-y-3 border-l-4 border-blue-500 pl-4">
                  {order.history.map((step, index) => (
                    <div key={index}>
                      <p className="font-medium">{step.status}</p>
                      <p className="text-gray-600 text-sm">{step.date}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserOrders;
