import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../features/orders/orderSlice";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    const paymentMethod = document.querySelector("input[name='payment']:checked").value;

    const orderData = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      payment: paymentMethod,

      // 🔥 Order Tracking fields
      status: "Processing",
      history: [
        {
          status: "Order Placed",
          date: new Date().toLocaleString(),
        },
      ],
    };

    dispatch(addOrder(orderData));
    setOrderPlaced(true);
  };

  // ================= SUCCESS MESSAGE ==================
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Thank You For Shopping!
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Your order has been successfully placed.  
            Track your order anytime from your account page.
          </p>

          <a
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  // ================= CHECKOUT UI ==================
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Billing Details */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your Name" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" className="w-full p-2 border rounded" placeholder="Enter your Email" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter your Phone number" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address</label>
              <textarea className="w-full p-2 border rounded" rows="3" placeholder="Enter your address"></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>

                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>

          {/* Payment Methods */}
          <div className="bg-white p-6 shadow rounded mt-6">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="space-y-3">

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" value="cod" defaultChecked />
                <span>Cash on Delivery (COD)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" value="card" />
                <span>Credit / Debit Card</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" value="upi" />
                <span>UPI (Google Pay / PhonePe / Paytm)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="payment" value="netbanking" />
                <span>Net Banking</span>
              </label>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
