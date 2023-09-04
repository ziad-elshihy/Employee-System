/* eslint-disable no-unused-vars */
import { RiDashboardLine, RiComputerLine } from 'react-icons/ri'
import { ImMug } from 'react-icons/im'
import { GiShakingHands } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'

const Aside = () => {
   return (
      <aside className=" bg-blue-500 min-h-screen flex items-center justify-center">
         <ul className=' cursor-pointer w-full py-[50px] text-center text-white text-xs'>
            <li className='py-4'>
               <RiDashboardLine className='relative left-2/4 translate-x-[-50%]' size={30} />
               <p>Dashboard</p>
            </li>
            <li className='py-4'>
               <RiComputerLine className='relative left-2/4 translate-x-[-50%]' size={30} />
               <p>Workplace</p>
            </li>
            <li className='py-4'>
               <ImMug className='relative left-2/4 translate-x-[-50%]' size={30} />
               <p>Holidays</p>
            </li>
            <li className='py-4 relative bg-blue-700 border-l-[5px] border-s-[#59c203]'>
               <span className='absolute bg-red-600 rounded-full w-4 h-4 text-[8px] right-12 top-3 z-10'>5</span>
               <BsFillPeopleFill className='relative left-2/4 translate-x-[-50%]' size={30} />
               <p>Employees</p>
            </li>
            <li className='py-4'>
               <GiShakingHands className='relative left-2/4 translate-x-[-50%]' size={30} />
            </li>
            <p>Inbound Requests</p>
         </ul>
      </aside>
   )
}

export default Aside
