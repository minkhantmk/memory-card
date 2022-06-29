import React from 'react'
import ScoreBoard from './ScoreBoard'
import styled from 'styled-components'

const Info = ({ current, best }) => {
    return (
        <Flex>
            <ScoreBoard current={current} best={best} />
            <Objective>
                <h2>Objective:</h2><br />
                <p>Try to click on as many cards as you can without clicking on one card twice.</p>
            </Objective>
        </Flex>
    )
}

const Flex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 20px 0px 70px 0px;

@media (max-width:${({theme}) => theme.mobile}) {
    flex-direction: column-reverse;
    align-items: stretch;
    margin: 20px 0px 20px 0px;
}
`

const Objective = styled.div`
text-align: right;
max-width: 300px;
line-height: 1.2rem;

&:nth-child(1) {
    font-size: 2rem;
}

@media (max-width:${({theme}) => theme.mobile}) {
    text-align: left;
    max-width: 100%;
    margin-bottom: 20px;
}
`

export default Info