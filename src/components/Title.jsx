/* eslint-disable react/prop-types */

const Title = ({title}) => {
   return (
      <p
         className="text-blue-500 relative py-2 font-bold before:content-[''] before:w-[4%] before:absolute before:bg-blue-600/30 before:h-1 before:rounded-full before:bottom-0 mb-3"
      >
         {title}
      </p>
   )
}

export default Title
