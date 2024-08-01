
const number = [2,4]

function AddNum(){
  const reduce = number.reduce((acc,value) => acc + value)
  return (
    <>
     <p>{reduce}</p>
    </>
  )

}

export default AddNum