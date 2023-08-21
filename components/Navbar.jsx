import Link from 'next/link'
import React from 'react'
import { BiHomeAlt, BiUser, BiMedal } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri"

const Navbar = () => {
  return (
    <div className='md:hidden flex justify-between items-center fixed bottom-[1rem] left-1/2 -translate-x-1/2 text-sm md:text-base backdrop-blur-lg bg-[#ffffff57] font-medium shadow-xl max-w-[960px] gap-5 md:gap-20 mt-5 px-10 py-5 rounded-full mx-auto z-10'>
        <Link href='#home'><BiHomeAlt size={30} /></Link>
        <Link href='#about'><BiUser size={30} /></Link>
        <Link href='#experience'><BiMedal size={30} /></Link>
        <Link href='#gallery'><RiGalleryLine size={30}/></Link>
    </div>
  )
}

export default Navbar