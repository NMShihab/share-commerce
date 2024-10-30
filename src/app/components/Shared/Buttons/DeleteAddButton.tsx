"use client";

import React from "react";
import AddIcon from "../../icons/AddIcon";
import RemoveIcon from "../../icons/RemoveIcon";

const DeleteAddButton = ({
  quantity,
  handleUpdateTocart,
  handleDecreaseFromCart,
}: {
  quantity: number;
  handleUpdateTocart: () => void;
  handleDecreaseFromCart: () => void;
}) => {
  return (
    <div className="bg-green-500 rounded-lg py-2 px-1  flex flex-row items-center justify-between w-[85%] text-white">
      <div className="cursor-pointer" onClick={handleDecreaseFromCart}>
        <RemoveIcon />
      </div>

      {`${quantity} Added in Cart `}
      <div className="cursor-pointer" onClick={handleUpdateTocart}>
        <AddIcon />
      </div>
    </div>
  );
};

export default DeleteAddButton;
