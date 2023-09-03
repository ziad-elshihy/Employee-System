/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


import { BiSolidBellRing } from 'react-icons/bi'
import image from '../assets/pexels-photo-220453.webp'
const NavBar = () => {
   const [date, setDate] = useState('')
   const showTime = useEffect(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      // if (hours > 12) {
      //    hours = hours - 12
      // }
      // if (minutes < 10) {
      //    minutes = `0${minutes}`
      // }
      // if (seconds < 10) {
      //    seconds = `0${seconds}`
      // }
      setTimeout(showTime, 1000);
      setDate(date.toLocaleString())
   }, [])
   return (
      <nav className="flex gap-8 bg-white w-full h-[12%] px-4 items-center justify-end">
         <p className="hidden md:block lg:block">{date}</p>
         <button className="hidden md:block lg:block bg-green-400 py-1 px-3 text-white rounded-lg">Sign in</button>
         <button className="hidden md:block lg:block px-4 py-3 border-x border-s-gray-400 relative">
            <span className='absolute bg-green-400 rounded-full h-4 w-4 text-[8px] right-3 top-1 z-10 text-white'>5</span>
            <BiSolidBellRing size={20} color="gray" />
         </button>
         <span className="flex gap-3 items-center">
            <img
               src={image}
               className=" w-8 h-8 rounded-full object-cover"
            />
            <p className=" text-lg text-gray-400">Ziad Elshihy</p>
         </span>
      </nav>
   )
}

export default NavBar
