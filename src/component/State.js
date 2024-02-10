import React , {useState} from 'react'

const State = () => {
  const [count, setCount]=useState(0);
  const [text, setText]= useState('')
  // const handelIncrease=()=>{
  //   setCount(count +1)
  // }
  // const handelDecrease=()=>{
  //   setCount(count -1)
   
  // }
  const handelInput=(e)=>{
    setText(e.target.value)
  }
  return (
    <div>
      <button onClick={()=>setCount(count +1)}>+</button>
      <button onClick={()=>setCount(count -1)}>-</button>
      <label>Count is {count}</label>
      <input type='text' value={text} onChange={handelInput}/>
      <h2>{text}</h2>
    </div>
  )
}

export default State
