/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BiSolidPencil, BiTrashAlt, BiLogoGmail } from 'react-icons/bi'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { TbExclamationMark } from 'react-icons/tb'
import { MdCallEnd } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import image from '../assets/pexels-photo-220453.webp'
import { useRef, useState } from 'react'
const Employee = ({ user , removeItem ,index }) => {
   const [showDetails, setShowDetails] = useState(false);
   const [showEmail, setShowEmail] = useState(false);
   const [showPhone, setShowPhone] = useState(false);
   const wrapperRef = useRef(null);
   return (
      <div className='flex flex-col md:flex-row lg:flex-row gap-5 items-center p-3 bg-white'>
         <div className='flex flex-col py-1 px-6 gap-2'>
            <img
               className=" w-14 h-14 rounded-full object-cover"
               src={user.file ? user.file : image}
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
               <div className="flex items-center gap-2">
                        <div
                           className="bg-[#eaeef0] w-[19px] h-[19px] rounded-full text-center flex justify-center items-center hover:shadow relative "
                           onMouseEnter={() => setShowEmail(true)}
                           onMouseLeave={() => setShowEmail(false)}
                        >
                           <HiOutlineMail className="mx-auto text-[10px]" />
                           {showEmail && (
                              <div
                                 className="bg-white shadow absolute top-7 -right-10 w-[240px] point-shape border border-[#eaeef0] z-10"
                                 ref={wrapperRef}
                              >
                                 <div className="grid grid-cols-3 text-left p-1">
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Email
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px]">
                                          {user.email}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div
                           className="bg-[#eaeef0] w-[19px] h-[19px] rounded-full text-center flex justify-center items-center hover:shadow relative"
                           onMouseEnter={() => setShowPhone(true)}
                           onMouseLeave={() => setShowPhone(false)}
                        >
                           <MdCallEnd className="mx-auto text-[10px]" />
                           {showPhone && (
                              <div
                                 className="bg-white shadow absolute top-7 -right-10 w-[240px] point-shape border border-[#eaeef0] z-10"
                                 ref={wrapperRef}
                              >
                                 <div className="grid grid-cols-3 text-left p-1">
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Phone
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px]">
                                          {user.phone}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                        <div
                           className={`bg-[#eaeef0] w-[19px] h-[19px] rounded-full text-center ${showDetails && 'details-shadow'}  hover:shadow cursor-pointer relative flex justify-center items-center`}
                           onMouseEnter={() => setShowDetails(true)}
                           onMouseLeave={() => setShowDetails(false)}
                        >
                           <TbExclamationMark className="mx-auto text-[10px]" />
                           {showDetails && (
                              <div
                                 className="bg-white shadow absolute top-7 -right-10 w-[240px] point-shape border border-[#eaeef0] z-10"
                                 ref={wrapperRef}
                              >
                                 <div className="grid grid-cols-3 text-left p-1">
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Office
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px]">
                                          {user.office}
                                       </p>
                                    </div>
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Role
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px]">
                                          {user.role}
                                       </p>
                                    </div>
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2  ">
                                          Copied Manager
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px] text-overflow" title={user.directManager}>
                                          {user.directManager}
                                       </p>
                                    </div>
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Joining Date
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px]">
                                          {user.date}
                                       </p>
                                    </div>
                                    <div className="flex flex-col">
                                       <p className="text-[#8997a4] text-[10px] font-[Roboto] mb-2 ">
                                          Manager
                                       </p>
                                       <p className="text-[#313030] text-[10px] font-[Roboto] -mt-[5px] text-overflow" title={user.directManager}>
                                          {user.directManager}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Employee
