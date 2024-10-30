"use client";

import React from "react";
import CartIcon from "../../icons/CartIcon";
import useCart from "../../../hooks/cart/useCart";

const CartIconContainer = () => {
  const { cart } = useCart();

  return (
    <div className="relative">
      <CartIcon />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
        {cart.quantity}
      </span>
    </div>
  );
};

export default CartIconContainer;
