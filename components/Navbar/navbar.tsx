import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-0 flex justify-between">
        <Link href="/">
          <Image
            src="/logo_swcorp.webp"
            alt="SWCorp Aduan Sisa"
            width={80}
            height={80}
          />
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
