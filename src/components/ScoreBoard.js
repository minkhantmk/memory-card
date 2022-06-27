import React, { useState } from 'react'
import styled from 'styled-components'

const ScoreBoard = ({current, best}) => {

    return (
        <div>
            <Container>
                <h3>Scoreboard</h3>
                <p>Current Score: {current}</p>
                <p>Best Score: {best}</p>
            </Container>

        </div>
    )
}

const Container = styled.div`
background-color: lightblue;
`

export default ScoreBoard