
const number = [1,2,3,4,5,6,7,8,9,10]

function AddNum(){
  const reduce = number.reduce((acc,value) => acc + value)
  return (
    <>
     <p>{reduce}</p>
    </>
  )

}

export default AddNum