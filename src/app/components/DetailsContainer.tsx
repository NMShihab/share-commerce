"use client";

import React from "react";
import useFetch from "../hooks/api/useFetch";
import Loading from "./Shared/Loading";
import { Product } from "../types/productTypes";
import ProductDetails from "./ProductDetails";

const DetailsContainer = ({ id }: { id: number }) => {
  const { data, error, loading } = useFetch<Product>(
    `https://dummyjson.com/products/${id}`
  );

  return (
    <div>
      {loading && <Loading />}

      {!loading && !error && data && <ProductDetails product={data} />}
    </div>
  );
};

export default DetailsContainer;
