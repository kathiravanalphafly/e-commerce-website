// UserWishlist.jsx
import React from "react";
import { useSelector } from "react-redux";

function UserWishlist() {
  // Safely access wishlist items from Redux store
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Your Wishlist is Empty</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserWishlist;
