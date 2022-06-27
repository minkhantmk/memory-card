import { useState } from 'react';
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
    if (chosen.includes(key)) {
      gameOver();
    }
    else {
      setChosen([...chosen, key]);
      incrementCurrent();
    }
  }

  const chosenCards = [];

  const cards = [
    {
      id: 1,
      text: "abc"
    },
    {
      id: 2,
      text: "def"
    },
    {
      id: 3,
      text: "ghi"
    },
    {
      id: 4,
      text: "jkl"
    },
    {
      id: 5,
      text: "mno"
    }
  ];

  return (
    <div>
      <GlobalStyle />
      <h1>Memory Cards</h1>
      <ScoreBoard current={current} best={best} />
      <button onClick={incrementCurrent}>Increment</button>
      <button onClick={gameOver}>Game Over</button>
      <Cards cards={cards} selectCard={selectCard}></Cards>
    </div>
  );
}

export default App;
