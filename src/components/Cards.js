import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import card1 from '../images/card1.svg'
import card2 from '../images/card2.svg'
import card3 from '../images/card3.svg'

const Cards = ({current, selectCard}) => {
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    const cards = [
      {
        id: 1,
        src: card1,
      },
      {
        id: 2,
        src: card2,
      },
      {
        id: 3,
        src: card3,
      },
      {
        id: 4,
        src: card1,
      },
      {
        id: 5,
        src: card1,
      },
      {
        id: 6,
        src: card1,
      },
      {
        id: 7,
        src: card1,
      },
      {
        id: 8,
        src: card1,
      },
      {
        id: 9,
        src: card1,
      },
      {
        id: 10,
        src: card1,
      }
    ];

    // shuffle cards and store in new array
    const shuffled = cards
    .map(value => ({value, sort: Math.random()}))
    .sort((a,b) => (a.sort - b.sort))
    .map(({value}) => value)
    
    // set shuffled cards as state
    setCardArray(shuffled);
  }, [current]);

  return (
    <CardsGrid>
        {
        cardArray.map(card => (
            <Card selectCard={selectCard} key={card.id} id={card.id} src={card.src} text={card.text} />
        ))
        }
    </CardsGrid>
  )
}

const CardsGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 20px;
margin: 20px auto;

@media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
`

export default Cards