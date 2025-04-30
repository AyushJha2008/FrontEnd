import { useCallback, useState } from 'react'
import './App.css'
import ChildA  from './component/childA'

function App() {
  const [count, setCount] = useState(0)

  const handleclick = useCallback(()=>{
    setCount(count+1)
  }, [count])

  return (
    <div>
      <button onClick={handleclick}>+</button>
      <h2>count: {count}</h2>

      <div>
        <ChildA buttonName="click me"/>
      </div>
    </div>
  )
}

export default App
