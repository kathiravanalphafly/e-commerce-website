import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/ProductSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...form, id: Date.now() }));
    alert("Product Added!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow max-w-lg"
      >
        <input className="border p-2 w-full mb-4" placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <input className="border p-2 w-full mb-4" placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })} />

        <input className="border p-2 w-full mb-4" placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })} />

        <textarea className="border p-2 w-full mb-4" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <input className="border p-2 w-full mb-4" placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
