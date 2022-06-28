import { useEffect, useState } from 'react';
import Cards from './Cards';
import Info from './Info';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

function App() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [chosen, setChosen] = useState([]);



  const incrementCurrent = () => {
    setCurrent(current + 1);
  }

  const gameOver = () => {
    if (current > best) {
      setBest(current);
    }

    setCurrent(0);
    setChosen([]);
  }

  const selectCard = (key) => {
    // check if card has been selected before
    if (chosen.includes(key)) {
      gameOver();
    }
    // else add card to selected cards
    else {
      setChosen([...chosen, key]);
      incrementCurrent();
    }
  }


  return (
    <Container>
      <GlobalStyle />
      <h1>Memory Cards</h1>
      <Info current={current} best={best} />
      <Cards current={current} selectCard={selectCard}></Cards>
    </Container>
  );
}

const Container = styled.div`
width: 70%;
margin: auto;

h1 {
  margin: 40px 0px 20px 0px;
}
`

export default App;
