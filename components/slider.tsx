import React from "react";
import type { NextPage } from "next";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Banner from "../public/img/download.jpg";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider: NextPage = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3].map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <Image src={Banner} alt="1" className="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
