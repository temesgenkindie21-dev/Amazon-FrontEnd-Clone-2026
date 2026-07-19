import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Carouseling from "../../Components/Carousel/Carouseling";
import Catagory from "../../Components/Catagory/Catagory";
import Producting from "../../Components/Product/Producting";

function Landing() {
  return (
    <LayOut>
      <Carouseling />
      <Catagory />
      <Producting />
    </LayOut>
  );
}

export default Landing;
