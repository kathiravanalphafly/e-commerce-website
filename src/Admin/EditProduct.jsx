import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../features/products/ProductSlice";

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  const existing = products.find((p) => p.id == id);

  const [form, setForm] = useState(existing);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProduct(form));   // ✔ correct way
    alert("Product Updated!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg">

        <input
          className="border p-2 w-full mb-4"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-4"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-4"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-4"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="bg-green-500 text-white px-6 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
