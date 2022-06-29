import React from 'react'
import styled from 'styled-components'

const Card = ({ id, src, text, selectCard}) => {
    return (
        <GridItem onClick={() => selectCard(id)}>
            <img src={src} alt="memory card"></img>
            <p>{text}</p>
        </GridItem>
    )
}

const GridItem = styled.div`
background-color: ${({theme}) => theme.colors.cards};
border-radius: 20px;
text-align: center;
padding: 20px;
-webkit-transition: all 0.1s ease;
transition: all 0.1s ease;
aspect-ratio: 1;

&:hover {
    transform: scale(1.03);
}
img {
    width:100%;
}
`

export default Card