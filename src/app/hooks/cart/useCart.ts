"use client";

import { useEffect, useState } from "react";
import { Item as Product, Cart, CartItem } from "@/app/types/cartTypes";

const useCart = () => {
  const [cart, setCart] = useState<Cart>({ items: [], quantity: 0, total: 0 });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart) as Cart);
    }

    // Event listener for cart updates
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        const updatedCart = JSON.parse(event.newValue || "{}");
        setCart(updatedCart);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Save cart to local storage
  const saveCart = (updatedCart: Cart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Trigger a storage event for other windows/tabs
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "cart",
        newValue: JSON.stringify(updatedCart),
      })
    );
  };

  // Add product to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = cart.items.find((item) => item.id === product.id);
    let updatedItems: CartItem[];

    if (existingItem) {
      updatedItems = cart.items.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
              subTotal: (item.quantity + quantity) * item.price,
            }
          : item
      );
    } else {
      updatedItems = [
        ...cart.items,
        { ...product, quantity, subTotal: product.price * quantity },
      ];
    }

    const updatedCart: Cart = {
      items: updatedItems,
      quantity: updatedItems.reduce((acc, item) => acc + item.quantity, 0),
      total: updatedItems.reduce((acc, item) => acc + item.subTotal, 0),
    };

    saveCart(updatedCart);
  };

  // Update quantity of product in cart
  const updateCart = (productId: number, quantity: number) => {
    const updatedItems = cart.items.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + quantity,
            subTotal: (item.quantity + quantity) * item.price,
          }
        : item
    );

    const isItemZero = updatedItems.some((items) => items.quantity === 0);

    if (isItemZero) {
      deleteFromCart(productId);
      return;
    }

    const total = updatedItems.reduce((acc, item) => acc + item.subTotal, 0);
    const cartQuantity = updatedItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedCart: Cart = {
      items: updatedItems,
      quantity: cartQuantity,
      total,
    };

    saveCart(updatedCart);
  };

  // Delete product from cart
  const deleteFromCart = (productId: number) => {
    const updatedItems = cart.items.filter((item) => item.id !== productId);

    const total = updatedItems.reduce((acc, item) => acc + item.subTotal, 0);
    const cartQuantity = updatedItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedCart: Cart = {
      items: updatedItems,
      quantity: cartQuantity,
      total,
    };

    saveCart(updatedCart);
  };

  return { cart, addToCart, updateCart, deleteFromCart };
};

export default useCart;
