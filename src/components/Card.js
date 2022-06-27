import React from 'react'
import styled from 'styled-components'

const Card = ({text}) => {
  return (
    <GridItem>
        <p>{text}</p>
    </GridItem>
  )
}

const GridItem = styled.div`
background-color: lightcoral;
`

export default Card