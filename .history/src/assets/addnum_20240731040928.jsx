import PropTypes from "prop-types"


function AddNum({num}){
  const total = num.reduce((acc,item) => acc + item,1)
  console.log(total);
  return null;
}

AddNum.p= {
  num : PropTypes.arrayOf(PropTypes.number).isRequired
}



export default AddNum