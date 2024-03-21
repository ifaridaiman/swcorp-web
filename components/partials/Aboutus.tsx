import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Aboutus = () => {
  return (
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
  )
}

export default Aboutus