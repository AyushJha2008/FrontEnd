import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/CardData'

const TitleCards = () => {
  return (
    <div className='titleCards'>
      <h2>Popular on WebFlex</h2>
      <div className="cardList">
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={card.image} />
            <div className='pName'><p>{card.name}</p></div>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards