import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../features/orders/orderSlice";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // ==================== Validation ====================
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^\d{10}$/.test(phone);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;

    // Phone only digits
    if (name === "phone") {
      const filtered = value.replace(/\D/g, ""); // remove non-digit
      setBilling({ ...billing, phone: filtered });
    } else {
      setBilling({ ...billing, [name]: value });
    }
  };

  const isFormValid =
    billing.name.trim() &&
    validateEmail(billing.email) &&
    validatePhone(billing.phone) &&
    billing.address.trim();

  // ==================== Place Order ====================
  const placeOrder = () => {
    if (!isFormValid) return;

    const orderData = {
      id: Date.now(),
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      payment: paymentMethod,
      billing,
      status: "Processing",
      history: [
        { status: "Order Placed", date: new Date().toLocaleString() },
      ],
    };

    dispatch(addOrder(orderData));
    setOrderPlaced(true);
  };

  // ==================== Success Message ====================
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Thank You For Shopping!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Your order has been successfully placed. Track your order anytime from your account page.
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

  // ==================== Checkout Form ====================
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Billing Details */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={billing.name}
                onChange={handleBillingChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={billing.email}
                onChange={handleBillingChange}
                className={`w-full p-2 border rounded ${
                  billing.email && !validateEmail(billing.email) ? "border-red-500" : ""
                }`}
                placeholder="Enter your Email"
              />
              {billing.email && !validateEmail(billing.email) && (
                <p className="text-red-500 text-sm mt-1">Invalid email format</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={billing.phone}
                onChange={handleBillingChange}
                maxLength={10}
                className={`w-full p-2 border rounded ${
                  billing.phone && !validatePhone(billing.phone) ? "border-red-500" : ""
                }`}
                placeholder="Enter your Phone number"
              />
              {billing.phone && !validatePhone(billing.phone) && (
                <p className="text-red-500 text-sm mt-1">Phone must be 10 digits</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <textarea
                name="address"
                value={billing.address}
                onChange={handleBillingChange}
                className="w-full p-2 border rounded"
                rows="3"
                placeholder="Enter your address"
              />
            </div>
          </form>
        </div>

        {/* Order Summary + Payment */}
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
              {["cod", "card", "upi", "netbanking"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>
                    {method === "cod"
                      ? "Cash on Delivery (COD)"
                      : method === "card"
                      ? "Credit / Debit Card"
                      : method === "upi"
                      ? "UPI (Google Pay / PhonePe / Paytm)"
                      : "Net Banking"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Place Order Button */}
          <button
            disabled={!isFormValid}
            onClick={placeOrder}
            className={`mt-6 w-full py-2 rounded text-lg text-white font-semibold ${
              isFormValid
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
