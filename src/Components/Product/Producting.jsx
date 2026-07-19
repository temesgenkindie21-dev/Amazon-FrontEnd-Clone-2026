import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

function Producting() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);
  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-w-[1450px] py-[100px] gap-[50px] justify-center mx-auto ">
          {products.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} productData={singleProduct} flex={false} renderDescription={false} key={singleProduct.id} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Producting;
