// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [name, setName] = useState('')
// create + manage + change state
// sync to all child
  return (
    <div>
      <Card name = {name} setName = {setName}/>
      <p>iam inside parent {name}</p>
    </div>
  )
}

export default App