import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/dashboard';
import Home from './components/home';
import About from './components/about';

const router = createBrowserRouter(
  [
    {path:"/",
      element:
       <Home/>
    },
    {
      paht:"/about",
      element: <About/>
    },
    {
      path:"/dashboard",
      element: <Dashboard/>
    }
  ]
)
function App() {
  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
