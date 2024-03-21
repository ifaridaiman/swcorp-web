"use client";

import SliderEISB from "@/components/partials/SliderEISB";
import SliderAlamFlora from "@/components/partials/SliderAlamFlora";
import ContactOperation from "@/components/partials/ContactOperation";
import HeroBanner from "@/components/partials/HeroBanner";
import SliderSWM from "@/components/partials/SliderSWM";
import Locations from "@/components/partials/Locations";
import Aboutus from "@/components/partials/Aboutus";

export default function Home() {
  return (
    <main>
      <HeroBanner />

      <div className="h-auto flex flex-col pt-8 pb-16 bg-gray-100" id="about">
        <Aboutus />
        <Locations />
      </div>
      <div className="bg-[#002e5d] py-16">
        <p className="text-center font-black text-white text-5xl tracking-widest">
          GALLERY
        </p>
      </div>
      <div className="bg-gray-200 py-16">
        <SliderAlamFlora/>
        <SliderSWM/>
        <SliderEISB/>
      </div>
      <ContactOperation />
    </main>
  );
}
