import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoint";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <LayOut>
      <section>
        <h1 className="p-[30px] text-3xl font-bold">Results</h1>
        <p className="p-[30px] text-md font-bold">Catagory / {categoryName}</p>
        <hr />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] max-w-[1450px] py-[100px] gap-[50px] justify-center mx-auto ">
          {results?.map((product) => (
            <ProductCard key={product.id} productData={product} renderAdd={true}/>
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
