/* eslint-disable no-unused-vars */
import { CiSearch } from 'react-icons/ci'
import { AiOutlinePlus } from 'react-icons/ai'
import Form from './Form'
import { useEffect, useState } from 'react'
import Employee from './Employee'

const getLocalStorage = () => {
   let users = localStorage.getItem('users');
   if (users) {
      return (users = JSON.parse(localStorage.getItem('users')));
   } else {
      return [];
   }
};
const Section = () => {
   const [image, setImage] = useState(null)
   const [show, setShow] = useState(false)
   const [users, setUsers] = useState(getLocalStorage())
   const [searchValue, setSearchValue] = useState("")
   const [userValues, setUserValues] = useState({
      file: '',
      name: '',
      date: '',
      phone: '',
      email: '',
      office: '',
      department: '',
      attendanceProfile: '',
      role: '',
      position: '',
      directManager: '',
      remotely: ''
   })

   const removeItem = (index) => {
      const newUser = users.filter((user) => user.index !== index)
      newUser.splice(index, 1)
      setUsers(newUser);
   };

   useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
   }, [users]);

   const handleChangeImage = (e) => {
      const selectedImage = e.target.files[0]
      if (selectedImage) {
         setImage(selectedImage)
         setUserValues((prev) => ({
            ...prev,
            file: URL.createObjectURL(selectedImage)
         }))
      }
   }
   return (
      <>
         <section className=" py-6 px-10 min-h-screen w-full flex flex-col gap-8">
            <div className="w-full flex gap-2 justify-between flex-col md:flex-row lg:flex-row" >
               <span className="w-[100%] md:w-[80%] lg:w-[85%] xl:w-[90%] relative h-fit">
                  <CiSearch color="blue" className=" absolute left-2 top-2/4 translate-y-[-50%]" />
                  <input
                     type="text"
                     className=" rounded-md w-full pl-8 py-1 outline-none"
                     placeholder="Search"
                     onChange={(e) => setSearchValue(e.target.value)}
                  />
               </span>
               <button
                  onClick={() => setShow(true)}
                  className="bg-blue-600 justify-center py-1 px-3 text-white rounded-lg flex relative items-center"
               >
                  <AiOutlinePlus color="white" />
                  Add new
               </button>
            </div>
            <div className="px-4">
               {
                  userValues.length > 0
                     ? <p className=" text-gray-400">Sorry , There is no Employee ...</p>
                     : <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {users.filter((user) => {
                           return searchValue.toLocaleLowerCase() === ''
                              ? user
                              : user.name.toLocaleLowerCase().includes(searchValue)
                        }).map((user, index) => {
                           return <Employee
                              key={index}
                              user={user}
                              index={index}
                              removeItem={removeItem}
                           />
                        })}
                     </div>
               }
            </div>
         </section>
         <Form
            show={show}
            setShow={setShow}
            userValues={userValues}
            setUserValues={setUserValues}
            users={users}
            setUsers={setUsers}
            handleChangeImage={handleChangeImage}
         />
      </>

   )
}

export default Section
