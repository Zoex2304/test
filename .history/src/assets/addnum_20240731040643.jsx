import PropTypes from "prop-types"


function AddNum({num}){
  const total = num.reduce((acc,item) => acc + item,1)
  console.log(total);
}

AddNum.proptypes

export default AddNum