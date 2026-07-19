import React from "react";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Carouseling() {
  const ImgData = [
    { imgs: Img1 },
    { imgs: Img2 },
    { imgs: Img3 },
    { imgs: Img4 },
    { imgs: Img5 },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {ImgData.map((value, index) => (
          <SwiperSlide key={index}>
            <img
              src={value.imgs}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent to-white dark:to-zinc-900 pointer-events-none z-10"></div>
    </div>
  );
}

export default Carouseling;