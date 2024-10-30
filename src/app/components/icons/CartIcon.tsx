"use client";

import Image from "next/image";
import Modal from "../Shared/Modal";
import { useState } from "react";
import NoData from "../Shared/Nodata";
import useCart from "@/app/hooks/cart/useCart";
import CartDetails from "../CartDetails";

const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <Image
        src={"/icons/market.png"}
        alt="cart"
        width={32}
        height={32}
        className="cursor-pointer"
        onClick={() => {
          setIsModalOpen(true);
        }}
      />

      {isModalOpen && (
        <Modal
          title="Cart"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {cart.quantity === 0 ? <NoData /> : <CartDetails />}
        </Modal>
      )}
    </>
  );
};

export default CartIcon;
