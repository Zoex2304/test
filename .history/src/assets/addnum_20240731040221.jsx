import PropTypes from 'prop-types';

function AddNum({ num }) {
  const total = num.reduce((acc, curr) => acc + curr, 0);
  console.log(total);
  return null;
}

AddNum.propTypes = {
  num: PropTypes.arrayOf(PropTypes.number).isRequired, // Validasi bahwa 'num' adalah array yang berisi angka
};

export default AddNum;
