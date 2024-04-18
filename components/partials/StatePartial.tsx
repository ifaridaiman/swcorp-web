'use client'
import React from "react";
import Link from "next/link";

const StatePartial = () => {
  // Sample JSON data
  const states = [
    {
      name: "Kuala Lumpur",
      url: "https://floracare.mflora.com.my/customer/index.cfm?page=edaftar",
    },
    {
      name: "Putrajaya",
      url: "https://floracare.mflora.com.my/customer/index.cfm?page=edaftar",
    },
    {
      name: "Pahang",
      url: "https://floracare.mflora.com.my/customer/index.cfm?page=edaftar",
    },
    {
      name: "Negeri Sembilan",
      url: "http://swmresponz.swmsb.com/complaint-bm.html",
    },
    { name: "Melaka", url: "http://swmresponz.swmsb.com/complaint-bm.html" },
    { name: "Johor", url: "http://swmresponz.swmsb.com/complaint-bm.html" },
    { name: "Kedah", url: "https://www.idamanonline.com/aduan-baru.html" },
    { name: "Perlis", url: "https://www.idamanonline.com/aduan-baru.html" },
    
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto">
        <h3 className="text-white font-bold text-2xl text-center">
          Sila klik mengikut lokasi negeri anda di bahagian bawah laman ini.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-3/4 mx-auto mt-8">
            {states.map((state, index) => (
              <Link
                key={index}
                href={state.url}
                className=" text-center border border-green-400 text-green-400 px-8 py-3 rounded hover:bg-green-400 hover:text-green-200 transition-all duration-100 ease-in-out "
              >
                {state.name}
              </Link>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default StatePartial;
