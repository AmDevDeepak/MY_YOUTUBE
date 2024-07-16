import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className="hover:bg-[#686868] px-3 py-2 bg-[#212121] text-white font-medium rounded-md">{name}</button>
    </>
  );
};

export default Button;
