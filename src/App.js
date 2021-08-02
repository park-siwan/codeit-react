import Dice from './Dice';
import HandButton from './HandButton';

function App() {
  const handleClick = (value) => console.log(value);
  return (
    <div>
      <Dice color='blue' num={3} />
      <HandButton value='rock' onClick={handleClick} />
      <HandButton value='scissor' onClick={handleClick} />
      <HandButton value='paper' onClick={handleClick} />
    </div>
  );
}

export default App;
