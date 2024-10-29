// ProductCard.tsx
import React from "react";
import CartaddIcon from "./icons/CartaddIcon";
import EyeIcon from "./icons/EyeIcon";
import OfferIcon from "./icons/OfferIcon";

interface ProductCardProps {
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount?: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  brand,
  price,
  originalPrice,
  discount,
  imageUrl,
}) => {
  return (
    <div className=" rounded-lg p-4 text-black relative group">
      <div className="relative">
        {discount && (
          <div className="absolute top-2  z-20 text-white  text-sm rounded">
            <div className="relative">
              <OfferIcon />
              <span className="absolute text-[10px] top-1 left-2">
                - ৳ {discount}
              </span>
            </div>
          </div>

          // <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-sm rounded">
          //   ৳ {discount}
          // </span>
        )}

        {/* Image container with hover effects */}
        <div className="relative overflow-hidden rounded-md">
          <img
            src={imageUrl}
            alt={title}
            className="w-52 h-52 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Glass effect buttons on hover */}
          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-end pb-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white flex flex-row items-center justify-center gap-2 w-[80%] bg-opacity-20 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-opacity-30 transition-colors">
              <CartaddIcon /> Add to Cart
            </button>
            <button className="bg-white flex flex-row gap-2 items-center justify-center w-[80%] bg-opacity-20 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-opacity-30 transition-colors">
              <EyeIcon />
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="mt-4">
        <p className="text-gray-400 text-sm">{brand}</p>
        <p className="text-lg font-semibold truncate">{title}</p>
        <div className="flex items-center mt-2 space-x-2">
          <p className="text-blue-400 text-xl font-semibold">৳ {price}</p>
          {originalPrice > price && (
            <p className="text-gray-500 line-through">৳ {originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
