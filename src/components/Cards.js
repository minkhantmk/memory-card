import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import card1 from '../images/card1.svg'
import card2 from '../images/card2.svg'
import card3 from '../images/card3.svg'
import card4 from '../images/card4.svg'
import card5 from '../images/card5.svg'
import card6 from '../images/card6.svg'
import card7 from '../images/card7.svg'
import card8 from '../images/card8.svg'
import card9 from '../images/card9.svg'
import card10 from '../images/card10.svg'

const Cards = ({ current, selectCard }) => {
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
        src: card4,
      },
      {
        id: 5,
        src: card5,
      },
      {
        id: 6,
        src: card6,
      },
      {
        id: 7,
        src: card7,
      },
      {
        id: 8,
        src: card8,
      },
      {
        id: 9,
        src: card9,
      },
      {
        id: 10,
        src: card10,
      }
    ];

    // shuffle cards and store in new array
    const shuffled = cards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => (a.sort - b.sort))
      .map(({ value }) => value)

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

@media (max-width: ${({ theme }) => theme.mobile}) {
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
}
`

export default Cards