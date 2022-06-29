import { useEffect, useState } from 'react';
import Cards from './Cards';
import Info from './Info';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

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

  const theme = {
    colors: {
      cards: "#FFF",
      darkgreen: "#167261"
    },
    mobile: "768px"
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <h1>Memory Cards</h1>
        <Info current={current} best={best} />
        <Cards current={current} selectCard={selectCard}></Cards>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
max-width: 960px;
margin: auto;

h1 {
  margin: 50px 0px 30px 0px;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  h1 {
    margin: 30px 0px;
  }
}

@media (max-width: 1000px) {
  margin: 0px 20px;
}
`

export default App;
