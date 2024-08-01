
const number = [2,]

function AddNum(){
  const reduce = number.reduce((acc,value) => acc + value)
  return (
    <>
     <p>{reduce}</p>
    </>
  )

}

export default AddNum