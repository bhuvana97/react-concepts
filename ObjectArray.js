import React,{useState} from 'react'

const ObjectArray = () => {
    const [first, setfirst] = useState([])
    const [first1, setfirst1] = useState({username:"elsa"})
    const [first2, setfirst2] = useState(false)
const handleClick=()=>{
setfirst([...first,first1]);
console.log(first)
setfirst2(true)
};
  return (
    <div>
      
<button onClick={handleClick}>Click</button>
{first2 ? <div>{first.map((id,todo)=><div key={id}>{todo.username}</div>)}</div>:""}
    </div>
  )
}

export default ObjectArray
