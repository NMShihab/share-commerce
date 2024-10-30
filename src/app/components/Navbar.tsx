import React from "react";
import CartIconContainer from "./CartIconContainer";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">ShareCommerce</span>
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
