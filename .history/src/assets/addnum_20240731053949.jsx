
const number = [2,4]

function AddNum(){
  const reduce = number.reduce((acc,value) => acc)
  return (
    <>
     <p>{number}</p>
    </>
  )

}

export default AddNum