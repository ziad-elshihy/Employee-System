/* eslint-disable react/prop-types */

const Label = ({ value, forInp}) => {
   return (
      <label className="text-xs" htmlFor={forInp}>{value}</label>

   )
}

export default Label
