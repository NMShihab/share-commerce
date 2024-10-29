"use client";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string; // ISO 8601 format
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO 8601 format
    updatedAt: string; // ISO 8601 format
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

const ProductContainer = ({ resData }: { resData: ProductResponse }) => {
  console.log({ resData });
  return (
    <div className="p-2 md:p-4 lg:p-6 mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {resData.products.map((product) => (
        <ProductCard
          key={product.id}
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
