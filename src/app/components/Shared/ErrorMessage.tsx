"use client";
import React from "react";

interface ErrorMessageProps {
  title?: string;
  message: string;
}

const ErrorMessage = ({ title = "Error", message }: ErrorMessageProps) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Top Red Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2">
          <div className="flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
