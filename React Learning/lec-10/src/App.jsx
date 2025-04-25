import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './features/counterSlice';

function App() {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch()
  function handleIncClick(){
    dispatch(increment())
  }

  function handleDecClick(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  return (
    <div className='container'>
      <button onClick={handleIncClick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDecClick}>-</button> <br /> <br />
      <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default App
