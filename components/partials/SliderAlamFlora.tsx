"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
const SliderAlamFlora = () => {
  return (
    <>
     <div className="container mx-auto px-4 py-8">
          <p className="text-center text-xl text-[#002e5d] font-bold">
            ALAM FLORA SDN. BHD.
          </p>
        </div>
        <div className="px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC1.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC2.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC3.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC4.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC5.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC6.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC7.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC8.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC9.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC10.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC11.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC12.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/AFSB/PIC13.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
          </Swiper>
        </div>
    </>
   
  )
}

export default SliderAlamFlora