/* eslint-disable no-unused-vars */
import Aside from "../components/Aside"
import NavBar from "../components/NavBar"
import Section from "../components/Section"

const Home = () => {

   return (
      <>
         <main className="flex min-h-screen w-full">
            <div className='fixed left-0 z-50'>
               <Aside />
            </div>
            <div className="bg-gray-100 w-[93%] h-full ml-[95px]">
               <NavBar />
               <Section />
            </div>
         </main>
      </>
   )
}

export default Home
