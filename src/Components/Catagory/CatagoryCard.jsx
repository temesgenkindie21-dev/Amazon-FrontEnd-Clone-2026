import React from "react";
import { Link } from "react-router-dom";

function CatagoryCard({ title, imgLink,name}) {
  return (
    <div className="h-[350px] w-[350px] bg-white shadow-md shadow-black">
      <Link to={`/category/${name}`} className="text-[rgba(35,35,35)]">
        <span>
          <h2 className="p-[5px] ml-[15px] text-2xl font-bold">{title}</h2>
        </span>
        <img src={imgLink} alt="" className="w-full max-h-[250px] px-2.5 object-contain"/>
        <p className="p-[5px] ml-[15px] text-lg text-blue-500 font-bold">Show More</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
