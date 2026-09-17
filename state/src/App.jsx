import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [changeCount, setChangeCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);

    if (backgroundColor !== color) {
      setChangeCount((count) => count + 1)
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <div>Color changed: {changeCount}</div>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
