import propType from "prop-types"

function AddNum({num}){
  const total = num.reduce((item,curr) => {return item + curr,0})
  console.log(total);
  return null;
}

A

export default AddNum