/* eslint-disable no-unused-vars */
import Aside from "../components/Aside"
import NavBar from "../components/NavBar"
import Section from "../components/Section"

const Home = () => {

   return (
      <>
         <main className="flex min-h-screen w-full">
            <Aside />
            <div className="bg-gray-100 w-[92%]">
               <NavBar />
               <Section />
            </div>
         </main>
      </>
   )
}

export default Home
