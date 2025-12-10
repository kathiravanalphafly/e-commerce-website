import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../features/products/ProductSlice"; 
import { useNavigate } from "react-router-dom";

function ManageProducts() {
  const products = useSelector((state) => state.product.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    alert("Product Deleted!");
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <table className="w-full bg-white shadow rounded overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Title</th>
            <th className="p-2">Category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-2">{p.id}</td>
              <td className="p-2">{p.title}</td>
              <td className="p-2">{p.category}</td>
              <td className="p-2">₹{p.price}</td>

              <td className="p-2 flex gap-2">
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(p.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(p.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageProducts;
