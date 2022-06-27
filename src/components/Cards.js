import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Cards = ({cards, selectCard}) => {
  return (
    <CardsGrid>
        {
        cards.map(card => (
            <Card selectCard={selectCard} key={card.id} id={card.id} text={card.text} />
        ))
        }
    </CardsGrid>
  )
}

const CardsGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 20px;
margin: 20px;

@media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
`

export default Cards