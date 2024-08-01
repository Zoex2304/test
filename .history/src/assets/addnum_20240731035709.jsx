function AddNum({num}){
  const total = num.reduce((item,curr) => {return item + curr,0})
  console.log(total);
}

export default AddNum