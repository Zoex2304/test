import PropType from "prop-types"

function AddNum({num}){
  const total = num.reduce((item,curr) => {return item + curr,0})
  console.log(total);
  return null;
}

AddNum.prototype = {num : propType.node.isRequired}

export default AddNum