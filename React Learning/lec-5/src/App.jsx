import { useState } from 'react'
import './App.css'

function App() {
  function handleClick(){
    alert('im clicked')
  }
  const handleHover = () =>{
    alert('hovering on para')
  }
  const handleSubmit=(e) => {
    e.preventDefault()
    alert("submit kardu kya")
  }
  const handleinput =(e)=>{
    console.log("change till now", e.target.value);
  }


  return(
    <form>
      <input type="text" onChange={handleinput}/>
    </form>
  )

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p onMouseOver={handleHover}>iam para</p>
    </div>
  )

  return(
    <form onSubmit={handleSubmit}>
      <button type="submit"></button>
    </form>
  )
}

export default App
