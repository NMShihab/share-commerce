"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductResponse } from "@/app/types/productTypes";

const ProductContainer = ({ resData }: { resData: ProductResponse }) => {
  return (
    <div className="max-w-6xl mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-4">
      {resData.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          brand={product.brand}
          price={product.price}
          discount={product.discountPercentage}
          imageUrl={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
