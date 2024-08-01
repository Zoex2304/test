import { useEffect } from 'react';
import PropTypes from 'prop-types';

function AddNum({ num }) {
  useEffect(() => {
    const total = num.reduce((acc, item) => acc + item, 0);
    console.log('Total:', total);
  }, [num]);

  return null;
}

AddNum.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AddNum;
