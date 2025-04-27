import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num){
    console.log("iam expensive");
    for(let i=0; i<=1000000000; i++);
    return num*2;
  }

  let doubeVal = useMemo(()=> expensiveTask(input), [input])

  // useMemo(()=> function, [dependency])
  
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>+</button>
      <div><h2>count:{count} </h2></div>
      <input type="number" placeholder='enter number' value={input} onChange={(e)=>setInput(e.target.value)} />
      <div><h2>double:{doubeVal}</h2></div>
    </div>
  )
}

export default App
