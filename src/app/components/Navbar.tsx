import React from "react";
import CartIcon from "./icons/CartIcon";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">ShareCommerce</span>
          </div>

          <div className="flex items-center">
            <div className="relative">
              {/* <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900 cursor-pointer" /> */}
              <CartIcon />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
