import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isloading ? (
        <Loader />
      ) : (
        <div className="max-w-[1000px] mx-auto flex justify-center items-center py-10">
          <ProductCard productData={product} flex={true} renderDescription={true} renderAdd={true}/>
        </div>
      )}
    </LayOut>
  );
}

export default ProductDetail;
