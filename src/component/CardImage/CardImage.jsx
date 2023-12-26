import React from "react";
import { useNavigate } from "react-router-dom";
const CardImage = ({ image, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/productDetails/${id}`)}
      className="box  w-96 h-96 transition-y ease-in-out duration-[6s]  border bg-cover bg-top hover:bg-bottom"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default CardImage;
