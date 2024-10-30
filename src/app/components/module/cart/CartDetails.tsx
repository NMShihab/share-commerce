"use client";

import React from "react";

import Image from "next/image";
import useCart from "@/app/hooks/cart/useCart";
import AddIcon from "../../icons/AddIcon";
import RemoveIcon from "../../icons/RemoveIcon";

const CartDetails = () => {
  const { cart, updateCart, deleteFromCart } = useCart();
  return (
    <div className="">
      <div className="max-h-80 overflow-auto space-y-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.name}
              height={64}
              width={64}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Price: ৳{item.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                Subtotal: ৳{item.subTotal.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center pr-10">
              <button
                onClick={() => {
                  updateCart(item.id, -1);
                }}
                className="px-2 py-1 text-xxl font-bold text-white bg-yellow-500 hover:bg-yellow-600 rounded-md"
              >
                <div className="w-3 bg-white border-.5 h-[2px] mx-[4px] my-2.5"></div>
              </button>
              <span className="mx-2 text-lg font-semibold">
                {item.quantity}
              </span>
              <button
                onClick={() => {
                  updateCart(item.id, 1);
                }}
                className=" text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-md"
              >
                <AddIcon />
              </button>
            </div>

            <button
              className=" bg-red-500 hover:bg-red-600 rounded-md"
              onClick={() => {
                deleteFromCart(item.id);
              }}
            >
              <RemoveIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 mt-4 border-t border-gray-200">
        <div className="flex justify-between text-lg font-semibold text-gray-800">
          <p>Total Items:</p>
          <p>{cart.quantity}</p>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-800 mt-2">
          <p>Total Price:</p>
          <p>৳{cart.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
