"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-[url('/bg-kualalumpur.webp')] bg-cover mt-12">
        <div className="container mx-auto px-4 md:px-0 flex items-center h-full">
          <div className="banner-name">
            <p className="text-white font-bold text-4xl md:text-8xl">
              Portal Talian
            </p>
            <p className="text-white font-bold text-4xl md:text-8xl">
              Indahkan Malaysia
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto flex flex-col pt-8 bg-gray-100" id="about">
        <div className="h-1/2 my-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 ">
            <div className="md:w-1/2 h-full">
              <img
                className="rounded-xl shadow-sm"
                src="/about-banner.webp"
                alt="SWCorp Aduan Sisa"
              />
            </div>
            <div className="md:w-1/2 h-full flex flex-col md:p-16 justify-center">
              <p className="font-bold text-black text-2xl md:text-4xl text-center md:text-left">
                About Us
              </p>
              <p className="font-medium text-black text-base mt-4 mb-4 text-center md:text-left">
                Portal Talian Indahkan Malaysia menyediakan perkhidmatan aduan
                dan pertanyaan dalam talian yang komprehensif.
              </p>
              <hr />
              <p className="font-medium text-black text-base mt-4 text-center md:text-left">
                Talian Indahkan Malaysia Portal provides a comprehensive online
                complaints service.
              </p>
              <Link
                className="border border-black w-fit px-8 py-2 rounded mt-8 transition-all hover:bg-gray-800/75 ease-linear duration-400 font-semibold hover:text-white text-center md:text-left mx-auto md:mx-0"
                href="/about"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="h-1/2 w-full block" id="locations">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 w-3/4 gap-16 md:gap-0 mx-auto">
              <div className="text-center flex flex-col justify-center items-center">
                <div className="h-18 flex justify-center items-center">
                  <Image
                    className="mb-8 object-fill"
                    src={"/Logo_Alam_Flora_Sdn_Bhd.webp"}
                    alt="Logo Alam Flora Sdn Bhd"
                    width={250}
                    height={250}
                  />
                </div>

                <p className="text-[#002e5d] font-bold text-xl" id="title">
                  ALAM FLORA SDN BHD
                </p>
                <div className=" w-80 md:w-60">
                  <p className="mt-4" id="address">
                    Level 4, Wisma DRB-HICOM, No. 2, Jln Usahawan U1/8, Seksyen
                    U1, 40150 Shah Alam, Selangor D.E.
                  </p>
                  <p id="contact">Tel: 03-2052 7922</p>
                  <p id="contact">Faks: 03-2052 8144</p>
                  <p id="email">Email: feedback@alamflora.com.my </p>
                  <p id="web">Web: www.alamflora.com.my</p>
                </div>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <div className="h-18 flex justify-center items-center">
                  <Image
                    className="mb-8 object-fill"
                    src={"/swm-logo.webp"}
                    alt="swm logo"
                    width={250}
                    height={250}
                  />
                </div>

                <p className="text-[#002e5d] font-bold text-xl" id="title">
                  SWM ENVIRONMENT SDN BHD
                </p>
                <div className=" w-80 md:w-60">
                  <p className="mt-4" id="address">
                    Tingkat 17, Menara LGB, No. 1, Jln Wan Kadir, Taman Tun Dr.
                    Ismail, 60000 Kuala Lumpur
                  </p>
                  <p id="contact">Tel: 03 - 27889200</p>
                  <p id="contact">Faks: 03 - 27889201</p>
                  <p id="email">Email: info@swmsb.com </p>
                  <p id="web">Web: www.swmsb.com</p>
                </div>
              </div>
              <div className="text-center flex flex-col justify-center items-center">
                <div className="h-18 flex justify-center items-center">
                  <Image
                    className="mb-8 object-fill"
                    src={"/idaman-logo.webp"}
                    alt="idaman logo"
                    width={250}
                    height={250}
                  />
                </div>

                <p className="text-[#002e5d] font-bold text-xl" id="title">
                  E-IDAMAN GROUP OF COMPANIES
                </p>
                <div className=" w-80 md:w-60">
                  <p className="mt-4" id="address">
                    Wisma Idaman, No.163 & 164, Jln BSG 4, Bandar Stargate,
                    Lebuhraya Sultanah Bahiyah, 05400 Alor Setar, Kedah D.A.
                  </p>
                  <p id="contact">Tel: 04-771 4053</p>
                  <p id="contact">Faks: 04-771 0489</p>
                  <p id="email">Email: aduan@e-idaman.com </p>
                  <p id="web">Web: www.e-idaman.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#002e5d] py-16">
        <p className="text-center font-black text-white text-5xl tracking-widest">
          GALLERY
        </p>
      </div>
      <div className="bg-gray-200 py-16">
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
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-xl text-[#002e5d] font-bold">
            SWM ENVIRONMENT SDN. BHD.
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
                src="/SWM/PIC1.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC2.png"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC3.png"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC4.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC5.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC6.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC7.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/SWM/PIC8.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-xl text-[#002e5d] font-bold">
            E-IDAMAN GROUP OF COMPANIES
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
                src="/EISB/PIC1.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC2.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC3.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC4.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC5.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC6.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC7.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC8.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC9.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC10.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className=" w-52 h-52"
                src="/EISB/PIC11.jpg"
                alt="Gallery 1"
                width={208}
                height={208}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg-white py-8">
        <p className="text-center font-bold text-black text-4xl tracking-wide">
          Contact Us
        </p>
        <p className="text-center font-semibold text-black text-base mt-4">
          Talian Aduan Pelanggan: 1-800-88-7472 | Waktu Operasi / Operating
          hours: 8.00 AM - 8.00 PM
        </p>
      </div>
    </main>
  );
}
