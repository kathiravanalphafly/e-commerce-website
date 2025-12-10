import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductGrid() {
  const products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
      {products.length === 0 ? (
        <p className="text-center col-span-4 text-gray-500 text-xl">
          Select a category to view products
        </p>
      ) : (
        products.map((product) => (
          <Link
            to={`/category/${product.category}`}
            key={product.id}
            className="flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 object-cover rounded-lg shadow"
            />

            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          </Link>
        ))
      )}
    </div>
  );
}

export default ProductGrid;
