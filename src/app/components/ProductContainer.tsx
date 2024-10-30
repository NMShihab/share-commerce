"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductResponse } from "../types/productTypes";

const ProductContainer = ({ resData }: { resData: ProductResponse }) => {
  console.log({ resData });
  return (
    <div className="p-2 md:p-4 lg:p-10 mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
      {resData.products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          brand={product.brand}
          price={product.price}
          originalPrice={product.price}
          discount={product.discountPercentage}
          imageUrl={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
