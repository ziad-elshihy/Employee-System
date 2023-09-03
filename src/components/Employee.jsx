/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BiSolidPencil, BiTrashAlt, BiLogoGmail } from 'react-icons/bi'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { ImPhoneHangUp } from 'react-icons/im'
import image from '../assets/pexels-photo-220453.webp'
const Employee = ({ user , removeItem ,index }) => {
   return (
      <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center p-3 bg-white'>
         <div className='flex flex-col py-1 px-6 gap-2'>
            <img
               className=" w-14 h-14 rounded-full object-cover"
               src={image}
               alt="profile"
            />
            <div className='flex justify-between'>
               <BiSolidPencil size={12} />
               <AiOutlinePauseCircle size={12} />
               <button onClick={() => removeItem(index)}>
                  <BiTrashAlt size={12} className='hover:text-red-600 cursor-pointer' />
               </button>
            </div>
         </div>
         <div className='flex flex-col flex-1 w-full text-center md:text-start lg:text-start items-center md:items-start lg:items-start'>
            <div className='flex flex-col'>
               <h3 className='font-bold'>{user.name}</h3>
               <p className=' text-base text-gray-500'>{user.position}</p>
               <p className='text-xs text-gray-400'>{user.department}</p>
            </div>
            <div className='flex w-full items-center justify-between'>
               <p
                  className={
                     user.attendanceProfile === 'Present'
                        ? 'p-[1px] text-xs bg-green-200 text-green-600'
                        : (user.attendanceProfile === 'Absent'
                           ? 'p-[1px] text-xs bg-red-200 text-red-600'
                           : 'p-[1px] text-xs bg-blue-200 text-blue-600')
                  }
               >
                  {user.attendanceProfile}
               </p>
               <div className='flex items-center gap-5'>
                  <BiLogoGmail size={10} />
                  <ImPhoneHangUp size={10} />
                  <p>!</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Employee
