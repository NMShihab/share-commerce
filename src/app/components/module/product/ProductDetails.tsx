import React from "react";
import { Product } from "../../../types/productTypes";
import Image from "next/image";
import useCart from "../../../hooks/cart/useCart";
import { Item } from "../../../types/cartTypes";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { cart, addToCart, updateCart } = useCart();

  const discountedPrice = (price: number, discountPercentage: number) =>
    (price - price * (discountPercentage / 100)).toFixed(2);

  const handleAddToCart = () => {
    const found = cart.items.some((item) => item.id === product.id);
    if (found) {
      updateCart(product.id, 1);
      alert("Cart Updated!!");
    } else {
      const item: Item = {
        id: product.id,
        image: product.thumbnail,
        price: product.price,
        name: product.title,
      };
      addToCart(item, 1);
      alert("Product Added!!");
    }
  };
  return (
    <div className="max-w-5xl max-h-96 overflow-auto mx-auto p-6 bg-white rounded-lg shadow-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full">
      {/* Product Image */}
      <div className="relative h-48 w-full mb-6">
        <Image
          src={product.thumbnail}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt={product.title}
        />
      </div>

      {/* Product Title, Brand, and Rating */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {product.title}
      </h2>
      <p className="text-sm font-medium text-gray-500 mb-1">
        Brand: {product.brand}
      </p>
      <div className="flex items-center space-x-1 mb-4">
        <span className="text-yellow-500 text-xl font-bold">
          {product.rating}
        </span>
        <span className="text-sm text-gray-600">
          ({product.reviews.length} reviews)
        </span>
      </div>

      {/* Price and Discount */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold text-gray-800">
          ${discountedPrice(product.price, product.discountPercentage)}
        </div>
        <div className="text-sm text-gray-500 line-through">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Stock Status */}
      <p className="text-sm font-medium text-gray-600 mb-2">
        Availability: {product.availabilityStatus}
      </p>
      <p className="text-sm font-medium text-gray-600 mb-2">
        In stock: {product.stock} units
      </p>

      {/* Product Description */}
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      {/* Dimensions, SKU, and Warranty */}
      <div className="text-sm text-gray-600 mb-4">
        <p>
          Dimensions: {product.dimensions.width} x {product.dimensions.height} x{" "}
          {product.dimensions.depth} cm
        </p>
        <p>SKU: {product.sku}</p>
        <p>Warranty: {product.warrantyInformation}</p>
      </div>

      {/* Quantity Selector and Add to Cart */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Quantity:</span>
          <span className="pl-1">{product.minimumOrderQuantity}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-semibold text-sm shadow-md transition duration-150"
        >
          Add to Cart
        </button>
      </div>

      {/* Additional Information */}
      <div className="text-sm text-gray-600 mb-4">
        <p>Return Policy: {product.returnPolicy}</p>
        <p>Shipping Information: {product.shippingInformation}</p>
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Customer Reviews
        </h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-700">{review.reviewerName}</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <div className="flex items-center text-yellow-500">
                <span className="font-bold">{review.rating}</span>
                <span className="ml-2 text-xs text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
