import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../Component/ProductCard";

function CategoryProducts() {
  const { category } = useParams();
  const allProducts = useSelector((state) => state.product.items);

  const categoryProducts = allProducts.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">
        {category} Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
