import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/childA';
import ChildB from './components/childB';
import ChildC from './components/childC';

// 1) create context
const UserContext = createContext();
// 2) wrap all child inside provider
// 3) pass value
// 4) consume

function App() {
  const [user, SetUser] = useState({name:'Ayush'})
  return (
    <div>
      <UserContext.Provider value={user}>
      <ChildC/>
      </UserContext.Provider>
      {/* <ChildB/>
      <ChildC/> */}
    </div>
  )
}

export default App
export {UserContext}
