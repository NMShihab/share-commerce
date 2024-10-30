"use client";

import Image from "next/image";
import Modal from "../Shared/Modal";
import { useState } from "react";
import NoData from "../Shared/Nodata";

const CartIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <NoData />
        </Modal>
      )}
    </>
  );
};

export default CartIcon;
