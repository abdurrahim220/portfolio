import React from "react";

const CardImage = ({ image }) => {
  return (
    <div
      className="box  w-96 h-96 transition-y ease-in-out duration-[6s]  border bg-cover bg-top hover:bg-bottom"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default CardImage;
