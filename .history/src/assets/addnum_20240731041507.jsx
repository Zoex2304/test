import PropTypes from "prop-types"
import 


function AddNum({num}){
  const total = num.reduce((acc,item) => acc + item,1)
  console.log(total);
  return null;
}

AddNum.propTypes= {
  num : PropTypes.arrayOf(PropTypes.number).isRequired
}



export default AddNum