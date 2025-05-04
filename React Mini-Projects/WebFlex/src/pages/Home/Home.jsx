import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/heroBanner.png'
import heroTitle from '../../assets/hero-Title.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={heroBanner} className='banner-img' />
        <div className='hero-caption'>
          <img src={heroTitle} className='caption-img' />
          <p>Monkey D. Luffy and his pirate crew explore a fantastical world of endless oceans and exotic islands in search of the world's ultimate treasure to become the next Pirate King.</p>
        </div>
      </div>
    </div>
  )
}

export default Home