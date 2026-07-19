import React from "react";
import CatagoryCard from "./CatagoryCard";
import { catagotyImage } from "./catagoryFullProducts";

function Catagory() {
  return (
    <div className="relative -mt-[10%] z-20 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-w-[1600px] place-items-center mx-auto gap-[50px]">
      {catagotyImage.map((value, index) => {
        return (
          <CatagoryCard
            title={value.title}
            imgLink={value.CataImg}
            name={value.name}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Catagory;
