import React from 'react'
import Link from 'next/link'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-[#002e5d]'>
        <div className='container mx-auto py-8 text-center flex md:flex-row flex-col px-4 gap-4 md:gap- justify-center items-center'>
            <p className='text-white font-thin'>© {year} - Rekabentuk dan Hak Milik Bersama AFSB, SWMESB dan EISB. Powered by Padimas Techsol Systems.</p>
            <Link className='border border-blue-200 w-fit px-8 rounded-full py-4 text-white mx-auto md:mx-2' href="http://sisa.iresponz.com/aduan/">SWCORP LOGIN</Link>
        </div>
    </div>
  )
}

export default Footer