import { useState } from 'react'
import './App.css'
import LoginBtn from './components/loginBtn'
import LogoutBtn from './components/logoutBtn'

function App() {
  const[isLogin, setLogin] = useState(false);

  // // ternary operator method
  // return(
  //   <div>
  //     {isLogin? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )
  
  // //if else method
  // if(isLogin){
  //   return(
  //     <LogoutBtn/>
  //   )
  // } else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  // // early return case
  if(!isLogin){
    return(<LoginBtn/>)
  }

  return(
    <div>
      <h1>Hello everyone</h1>
      <div>{isLogin && <LogoutBtn/>}</div>
    </div>
  )
}



export default App
