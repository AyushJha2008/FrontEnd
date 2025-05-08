import React from 'react'
import './Footer.css'
import twitter_icon from '../../assets/twitter.svg'
import githubIcon from '../../assets/github.svg'
import instaIcon from '../../assets/instagram.svg'
import linkedIcon from '../../assets/linkedin.svg'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={instaIcon}/>
        <img src={linkedIcon} />
        <img src={githubIcon} />
        <img src={twitter_icon} />
      </div>
    </div>
  )
}

export default Footer