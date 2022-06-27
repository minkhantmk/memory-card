import React from 'react'
import styled from 'styled-components'

const Card = ({ id, text, selectCard}) => {
    return (
        <GridItem onClick={() => selectCard(id)}>
            <p>{text}</p>
        </GridItem>
    )
}

const GridItem = styled.div`
background-color: lightcoral;
text-align: center;
padding: 20px;
-webkit-transition: all 0.1s ease;
transition: all 0.1s ease;

&:hover {
    transform: scale(1.03);
}
`

export default Card