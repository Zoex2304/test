import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function AddNum({ num }) {
  const [currValue, setNum] = useState(0);

  const counter = () => {
    setNum(currValue + 1)
  };

  useEffect(() => {
    const total = num.reduce((acc, item) => acc + item, 1);
    console.log(total);
    c
  }, [num]);

  useEffect(() => {
    console.log("value now : ",currValue);
  })
  return null;
}

AddNum.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AddNum;
