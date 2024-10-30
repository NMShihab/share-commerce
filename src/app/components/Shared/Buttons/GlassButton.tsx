"use client";

import React from "react";

const GlassButton = ({
  Icon,
  onClick,
  text,
}: {
  Icon: () => React.JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text: string;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white flex flex-row items-center justify-center gap-2 w-[80%] bg-opacity-20 backdrop-blur-sm text-white py-2 px-4 rounded-lg hover:bg-opacity-30 transition-colors"
    >
      <Icon /> {text}
    </button>
  );
};

export default GlassButton;
