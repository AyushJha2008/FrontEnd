import { useRef, useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   let val = useRef(0);

//   let btnRef = useRef();

//   function handleInc(){
//     val.current = val.current + 1
//     console.log("value of val:", val.current);
//     setCount(count+1)
//   }
//   useEffect(()=>{console.log("iam rendering again");})

//   function changeCol(){
//     btnRef.current.style.backgroundColor = 'red';
//   }

//   return (
//     <div>
//       <button ref={btnRef} onClick={handleInc}>+</button> <br /> <br />
//       <button onClick={changeCol}>change color of +</button> <br /> <br />
//       <div>count: {count}</div>
//     </div>
//   )
// }

function App(){
  const[time, setTime] = useState(0);

  let timeRef = useRef(null);

  function startTimer() {
    timeRef.current = setInterval(()=>{
      setTime(time => time+1)
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch: {time} seconds</h1>
      <button onClick={startTimer}> Start </button> <br /> <br />
      <button onClick={stopTimer}> stop </button> <br /> <br />
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default App