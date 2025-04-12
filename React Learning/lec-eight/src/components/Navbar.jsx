import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <ol>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/dashboard">Dashboard</Link> </li>
        </ol>
    </div>
  )
}

export default Navbar