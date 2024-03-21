import React from 'react'
import Image from "next/image";

const Locations = () => {
  return (
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
  )
}

export default Locations