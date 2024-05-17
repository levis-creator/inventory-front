import React from "react";

const Logo = () => {
  return (
    <a href="#" className="flex mr-4">
      <img
        src="https://flowbite.s3.amazonaws.com/logo.svg"
        className="mr-3 h-8"
        alt="FlowBite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        InventoTrack
      </span>
    </a>
  );
};

export default Logo;
