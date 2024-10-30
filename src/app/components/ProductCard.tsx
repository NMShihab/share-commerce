"use client";

import React from "react";
import CartaddIcon from "./icons/CartaddIcon";
import EyeIcon from "./icons/EyeIcon";
import OfferIcon from "./icons/OfferIcon";
import GlassButton from "./Shared/Buttons/GlassButton";
import Image from "next/image";
import { Cart, CartItem, Item } from "../types/cartTypes";
import useCart from "../hooks/cart/useCart";
import DeleteAddButton from "./Shared/Buttons/DeleteAddButton";

interface ProductCardProps {
  id: number;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount?: number;
  imageUrl: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  brand,
  price,
  originalPrice,
  discount,
  imageUrl,
}) => {
  const { cart, addToCart, updateCart } = useCart();
  console.log({ originalPrice, price });

  const handleupdateToCart = () => {
    console.log("Called");
    updateCart(id, 1);
  };

  const handleDecreaseFromCart = () => {
    updateCart(id, -1);
  };

  const isItemAdded = (cart: Cart, id: number) => {
    if (cart.items.length === 0) {
      return false;
    }
    const found = cart.items.some((item) => item.id === id);

    return found;
  };

  const renderButton = () => {
    const found = isItemAdded(cart, id);

    if (!found) {
      return (
        <GlassButton
          Icon={CartaddIcon}
          text="Add to Cart"
          onClick={() => {
            const item: Item = {
              id: id,
              image: imageUrl,
              price: price,
              name: title,
            };
            addToCart(item, 1);
          }}
        />
      );
    }

    const findItem = cart.items.find((item) => item.id === id) as CartItem;

    return (
      <DeleteAddButton
        quantity={findItem.quantity}
        handleUpdateTocart={handleupdateToCart}
        handleDecreaseFromCart={handleDecreaseFromCart}
      />
    );
  };

  const calculateDiscountPrice = (price: number, discount: number) => {
    const discountAmount = (price * discount) / 100;

    // Calculate the updated price
    const updatedPrice = price - discountAmount;

    return {
      updatedPrice: updatedPrice.toFixed(2),
      discountAmount: discountAmount.toFixed(2),
    };
  };

  const PriceContent = () => {
    if (!discount) {
      return (
        <div className="flex items-center mt-2 space-x-2">
          <p className="text-blue-400 text-xl font-semibold">৳ {price}</p>
        </div>
      );
    }
    if (discount) {
      const { updatedPrice } = calculateDiscountPrice(price, discount);

      return (
        <div className="flex items-center mt-2 space-x-2">
          <p className="text-blue-400 text-xl font-semibold">
            ৳ {updatedPrice}
          </p>

          <p className="text-gray-500 line-through">৳ {price}</p>
        </div>
      );
    }
  };

  const discountAmountContent = () => {
    const { discountAmount } = calculateDiscountPrice(
      price,
      discount as number
    );

    return (
      <span className="absolute text-[10px] top-1 left-2">
        - ৳ {discountAmount}
      </span>
    );
  };
  return (
    <div className=" rounded-lg p-.5 text-black relative group hover:shadow-md">
      <div className="relative">
        {discount && (
          <div className="absolute top-2 left-[-4px]  z-20 text-white  text-sm rounded">
            <div className="relative">
              <OfferIcon />
              {discountAmountContent()}
            </div>
          </div>
        )}

        {/* Image container with hover effects */}
        <div className="relative overflow-hidden rounded-md">
          <div className="relative w-full h-64">
            <Image
              src={imageUrl}
              alt="Description"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Glass effect buttons on hover */}
          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-end pb-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {renderButton()}
            <GlassButton Icon={EyeIcon} text="Quick View" />
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="mt-4 pl-2 pb-2">
        <p className="text-gray-400 text-sm">{brand}</p>
        <p className="text-lg font-semibold truncate">{title}</p>
        {/* <div className="flex items-center mt-2 space-x-2">
          <p className="text-blue-400 text-xl font-semibold">৳ {price}</p>
          {originalPrice > price && (
            <p className="text-gray-500 line-through">৳ {originalPrice}</p>
          )}
        </div> */}
        {PriceContent()}
      </div>
    </div>
  );
};

export default ProductCard;
