import { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Cards from './Cards';
import GlobalStyle from './globalStyles';

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
    <div>
      <GlobalStyle />
      <h1>Memory Cards</h1>
      <ScoreBoard current={current} best={best} />
      <button onClick={incrementCurrent}>Increment</button>
      <button onClick={gameOver}>Game Over</button>
      <Cards current={current} selectCard={selectCard}></Cards>
    </div>
  );
}

export default App;
