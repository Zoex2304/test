import PropTypes from "prop-types";
import { useEffect } from "react";

function AddNum({ num }) {
  useEffect(() => {
    const total = num.reduce((acc, item) => acc + item, 1);
    console.log(total);
    return null;
  },[num]);
}

AddNum.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AddNum;
