/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Title from './Title'
import Input from './Input'
import Label from './Label'
import Select from './Select';
import { useEffect, useRef, useState } from 'react';
import drag from '../assets/drag-and-drop-add-document-file-button-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg'
const Form = ({ show, setShow, userValues, setUserValues, users, setUsers, handleChangeImage }) => {
   const fileRef = useRef(null)
   const [image, setImage] = useState(null)
   const handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      // const file = 
      setUserValues({
         ...userValues,
         [name]: value
      })
   }
   let {
      name,
      file,
      date,
      phone,
      email,
      office,
      department,
      attendanceProfile,
      role,
      position,
      directManager,
      remotely
   } = userValues
   const handleSubmit = (e) => {
      e.preventDefault()
      setUsers([
         ...users,
         {
            name,
            file,
            date,
            phone,
            email,
            office,
            department,
            attendanceProfile,
            role,
            position,
            directManager,
            remotely
         }
      ])
      setShow(false)
   }
   return (
      <section className={show ? 'fixed p-4 bg-white w-[80%] left-2/4 translate-x-[-50%] top-2/4 translate-y-[-50%] z-50 overflow-scroll' : 'hidden'}>
         <form
            onSubmit={handleSubmit}
            className="container"
         >
            <h1 className='text-blue-500 pb-2 w-full border-b-[1px] border-blue-500'>NEW EMPLOYEE</h1>
            {/* Personal info */}
            <div>
               <Title title={'Personal Info'} />
               <div className='flex flex-col md:flex-row lg:flex-row mt-4 w-full gap-4'>
                  <div
                     onClick={() => fileRef.current.click()}
                     className='w-full md:w-2/6 cursor-pointer lg:w-2/6 px-8 flex items-center justify-between border'
                  >
                     <img
                        className='w-[100px] mx-auto  md:mx-0 lg:mx-0 '
                        src={drag}
                        alt='Drag & Drop'
                     />
                     <button
                        className='bg-blue-400 hidden md:block lg:block text-white p-1 rounded-md'
                     >
                        Choose Image
                     </button>
                     <input
                        className='hidden'
                        onChange={handleChangeImage}
                        accept='image/*'
                        type='file'
                        name='file'
                        ref={fileRef}
                     />
                  </div>
                  <div className='w-full md:w-2/6 lg:w-2/6 flex flex-row md:flex-col lg:flex-col gap-2'>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full'>
                        <Label forInp={'text'} value={'Name'} />
                        <Input type={'text'} id={'text'} name={'name'} handleChange={handleChange} />
                     </span>
                     <span className='flex flex-col  w-2/4 md:w-full lg:w-full'>
                        <Label forInp={'phone'} value={'Phone'} />
                        <Input type={'number'} id={'phone'} name={'phone'} handleChange={handleChange} />
                     </span>
                  </div>
                  <div className='w-ful md:w-2/6 lg:w-2/6 flex flex-row md:flex-col lg:flex-col gap-2'>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full '>
                        <Label forInp={'date'} value={'Start Date'} />
                        <Input type={'date'} id={'date'} name={'date'} handleChange={handleChange} />
                     </span>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full '>
                        <Label forInp={'email'} value={'Email'} />
                        <Input type={'email'} id={'email'} name={'email'} handleChange={handleChange} />
                     </span>
                  </div>
               </div>
            </div>
            {/* Office Info */}
            <div>
               <Title title={'Office Info'} />
               <div>
                  <div className='flex flex-col gap-1'>
                     <Label forInp={'office'} value={'Office'} />
                     <Select
                        id={'office'}
                        option1={'Arabic Localizer'}
                        option2={'Microsoft'}
                        option3={'Ibm'}
                        name={'office'}
                        handleChange={handleChange}
                     />
                  </div>
                  <div className='flex gap-4'>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full gap-1'>
                        <Label forInp={'department'} value={'Department'} />
                        <Select
                           id={'department'}
                           option1={'Business Development'}
                           option2={'Chemistry Department'}
                           option3={'Agriculture Department'}
                           name={'department'}
                           handleChange={handleChange}
                        />
                     </span>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full gap-1'>
                        <Label forInp={'attendance-profile'} value={'Attendance Profile'} />
                        <Select
                           id={'attendance-profile'}
                           option1={'Weekend'}
                           option2={'Present'}
                           option3={'Absent'}
                           name={"attendanceProfile"}
                           handleChange={handleChange}
                        />
                     </span>
                  </div>
                  <div className='flex gap-4'>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full gap-1'>
                        <Label forInp={'role'} value={'Role'} />
                        <Select
                           id={'role'}
                           option1={'Manager'}
                           option2={'Employee'}
                           option3={'Customer'}
                           name={'role'}
                           handleChange={handleChange}
                        />
                     </span>
                     <span className='flex flex-col w-2/4 md:w-full lg:w-full gap-1'>
                        <Label forInp={'position'} value={'Position'} />
                        <Select
                           id={'position'}
                           option1={'HR Head'}
                           option2={'Manager'}
                           option3={'Worker'}
                           name={'position'}
                           handleChange={handleChange}
                        />
                     </span>
                  </div>
                  <div className='flex flex-col w-2/4 gap-1'>
                     <Label forInp={'direct-manager'} value={'Direct Manager'} />
                     <Select
                        id={'direct-manager'}
                        option1={'Ahmed Ismail'}
                        option2={'Malek Mohamed'}
                        name={'directManager'}
                        handleChange={handleChange}
                     />
                  </div>
               </div>
            </div>
            {/* Work Remotely */}
            <div>
               <Title title={'Work From Home'} />
               <span className='flex items-center gap-2'>
                  <input name='remotely' type='checkbox' id='checkbox' value='Work Remotely' onChange={handleChange} />
                  <label htmlFor='checkbox'>Allow Employee To Work From Home</label>
               </span>
            </div>
            <div className='mt-5 flex gap-2 justify-end w-full'>
               <button
                  type='button'
                  onClick={() => setShow(false)}
                  className=' py-1 px-4 text-white rounded-md bg-red-600'>
                  Cancel
               </button>
               <button type='submit' className='py-1 px-4 text-white rounded-md bg-blue-600'>
                  Save
               </button>
            </div>
         </form>
      </section>
   )
}

export default Form
