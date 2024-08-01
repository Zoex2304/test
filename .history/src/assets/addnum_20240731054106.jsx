
const number = [2,4,5,5,5,5,5,5,5,5,5]

function AddNum(){
  const reduce = number.reduce((acc,value) => acc + value)
  return (
    <>
     <p>{reduce}</p>
    </>
  )

}

export default AddNum