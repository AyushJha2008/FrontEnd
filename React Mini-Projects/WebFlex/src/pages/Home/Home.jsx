import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/heroBanner.png'
import heroTitle from '../../assets/hero-Title.png'
import playIcon from '../../assets/Play-icon.png'
import infoIcon from '../../assets/info-icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={heroBanner} className='banner-img' />

        <div className='hero-caption'>
          <img src={heroTitle} className='caption-img' />
          <p>Monkey D. Luffy and his pirate crew explore a fantastical world of endless oceans and exotic islands in search of the world's ultimate treasure to become the next Pirate King.</p>
          <div className="hero-btns">
            <button className='btn'><img src={playIcon} />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} />More Info</button>
          </div>
        </div>
      </div>
      <div className="trend-card"> <title/> </div>
      <div className="more-cards">
        <TitleCards title={"Top-Airing"}/>
        <TitleCards title={"Movies"}/>
        <TitleCards title={"TV Series"}/>
        <TitleCards title={"Specials"}/>
      </div>
      <Footer/>

    </div>
  )
}

export default Home