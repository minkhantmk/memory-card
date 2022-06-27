import { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import Cards from './Cards';

function App() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);

  const incrementCurrent = () => {
    setCurrent(current+1);
  }

  const gameOver = () => {
    if (current > best) {
      setBest(current);
    }

    setCurrent(0);
  }

  return (
    <div>
      <h1>Memory Cards</h1>
      <ScoreBoard current={current} best={best}/>
      <button onClick={incrementCurrent}>Increment</button>
      <button onClick={gameOver}>Game Over</button>
    </div>
  );
}

export default App;
