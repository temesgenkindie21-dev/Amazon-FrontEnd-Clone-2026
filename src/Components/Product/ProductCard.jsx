import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Numeral/Numeral";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/actions.type";

function ProductCard({
  productData,
  flex,
  renderDescription,
  renderAdd,
  renderImg,
}) {
  const { id, title, price, image, rating, description } = productData;

  const [state, dispatch] = useContext(DataContext);
  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, price, image, rating, description },
    });
  };
  return (
    <div
      className={`group w-[250px] shadow-[0_0_10px_rgba(0,0,0,0.2)] p-2.5 text-black relative ${flex ? "shadow-none h-auto flex flex-col md:flex-row gap-[50px] w-full h-[50vh]" : ""}`}
    >
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt=""
          className={`p-2.5 object-contain
    ${
      renderImg
        ? "w-[150px] h-auto"
        : flex
          ? "w-[300px] h-auto"
          : "w-full h-[200px]"
    }
  `}
        />
      </Link>
      <div>
        <h1
          className={`font-bold ${flex ? "py-5" : ""} ${renderDescription ? "text-3xl" : "text-lg"}`}
        >
          {title}
        </h1>
        {renderDescription && (
          <div className="max-w-[750px] font-bold capitalize text-lg">
            {description}
          </div>
        )}
        <div className="flex px-2.5 items-center">
          <Rating value={5} precision={rating?.rate} readOnly />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button
            className={`absolute bottom-2 left-1/2 -translate-x-1/2
               w-[90%] py-2 rounded-full
               bg-[#febd69] hover:bg-[#d49644]
               opacity-0 group-hover:opacity-100
               transition-all duration-300 cursor-pointer ${flex ? "static opacity-100 w-[150px] ml-16 mt-2" : ""}`}
            onClick={AddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
