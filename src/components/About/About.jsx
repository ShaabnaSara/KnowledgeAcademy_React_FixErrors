import { useState } from 'react'

function About() {

  let [count,setCount] = useState(0);
  const changeCount = ()=>{
    setCount(count++);
  };
  return (
    <div>
      <button onClick={changeCount}>count : {count}</button>
    </div>
  )
}

export default About;