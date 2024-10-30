import React from "react";
import CartIconContainer from "./CartIconContainer";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex  justify-between items-center h-16">
          <div className="relative flex items-start w-40 h-12">
            <Image
              src={"/logo.svg"}
              alt="Icon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="flex items-center">
            <CartIconContainer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
