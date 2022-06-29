import React, { useState } from 'react'
import styled from 'styled-components'

const ScoreBoard = ({current, best}) => {

    return (
            <Container>
                <h2>Score: {current}</h2><br />
                <h2>Best: {best}</h2>
            </Container>
    )
}

const Container = styled.div`
background-color: ${({theme}) => theme.colors.darkgreen};
border-radius: 20px;
padding: 20px;
min-width: 200px;

h2 {
    color: #fff;
}

@media (max-width: ${({theme}) => theme.mobile}) {
    h2 {
        text-align: center;
    }
}
`

export default ScoreBoard