import React from 'react'
import ScoreBoard from './ScoreBoard'
import styled from 'styled-components'

const Info = ({ current, best }) => {
    return (
        <Flex>
            <ScoreBoard current={current} best={best} />
            <Objective>
                <p>Objective:</p><br />
                <p>Try to click on as many cards as you can without clicking on one card twice.</p>
            </Objective>
        </Flex>
    )
}

const Flex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 20px 0px 70px 0px;

div {

}
`
const Objective = styled.div`
text-align: right;
max-width: 400px;
`

export default Info