/* eslint-disable react/prop-types */

const Select = ({ handleChange, name, id, option1, option2, option3 }) => {
   return (
      <select
         placeholder="Select"
         onChange={handleChange}
         name={name}
         className={`outline-slate-400 border-[1px] rounded-sm border-gray-300 p-1 mb-4 text-sm text-gray-500`}
         id={id}
         required
      >
         <option>{option1}</option>
         <option>{option2}</option>
         <option>{option3}</option>
      </select>
   )
}

export default Select
