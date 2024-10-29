"use client";
import React from "react";

interface NoDataProps {
  title?: string;
  message?: string;
}

const NoData = ({
  title = "No Data Found",
  message = "We couldn't find any items to display at the moment.",
}: NoDataProps) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="text-center">
          {/* Empty Box SVG Illustration */}
          <svg
            className="w-24 h-24 mx-auto text-gray-400 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>

          {/* Content */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-500">{message}</p>

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoData;
