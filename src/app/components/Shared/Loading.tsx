import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <div className="animate-spin h-10 w-10 border-4 border-green-500 border-t-transparent rounded-full mb-4" />
      <p className="text-lg text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
