/* eslint-disable react/prop-types */

const Input = ({ type, id, value, name, handleChange }) => {
   return (
      <input
         onChange={handleChange}
         name={name}
         value={value}
         id={id}
         type={type}
         className=' outline-slate-400 border-[1px] rounded-sm border-gray-300'
         required
      />

   )
}

export default Input
