import { useEffect, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1);
  }

  // fisrt = side-effect
      // second = clean-up
      // third = comma seprated list

      // variation 1 (every-rendering)
      // useEffect(() => {
      //   alert("every render");
      // })

      // variation 2 (only 1st rendering)
      // useEffect(() => {
      //   alert("every render");
      // }, [])

      // run only on condional rendering

      // varn 4
      // useEffect(() => {
      //   alert("count condn render");
      // },[count])

      //varn 5
      // useEffect(() => {
      //   alert("every render");{
      //     return() =>{alert("cleanup")}
      //   }
      // },[count])
      
  return (
      <div>
        <button onClick={handleClick}>click me</button>
        count = {count}
      </div>
  )
}

export default App
