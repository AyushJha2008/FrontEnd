import React from 'react'
import './Navbar.css'
import logo from '../../assets/banner.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell.png'
import prof_icon from '../../assets/profile.png'
import drop_icon from '../../assets/drop.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
          <img src={logo} />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} className='icon' />
          <p>Children</p>
          <img src={bell_icon} className='icon' />
          <div className='navbar-profile'>
            <img src={prof_icon} className='profile' />
            {/* <img src={drop_icon} /> */}
            <div className="dropdown">
              <p>Sign out</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar