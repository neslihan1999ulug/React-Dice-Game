import { useState } from 'react'

function App() {
  const [playerName, setPlayerName] = useState('Player 1');
  const [playerRoll, setPlayerRoll] = useState(2);
  const [computerRoll, setComputerRoll] = useState(3);
  const [result, setResult] = useState('');
  const [rolling, setRolling] = useState(false);

  
  const rollDice = () => {
    setRolling(true);
    setResult('');
    let finalPlayerRoll = Math.ceil(Math.random() * 6);
    let finalComputerRoll = Math.ceil(Math.random() * 6);

    let interval = setInterval(() => {
      finalPlayerRoll = Math.ceil(Math.random() * 6);
      finalComputerRoll = Math.ceil(Math.random() * 6);
      setPlayerRoll(finalPlayerRoll);
      setComputerRoll(finalComputerRoll);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setRolling(false);

      if (finalPlayerRoll > finalComputerRoll) {
        setResult('You win!');
      } else if (finalPlayerRoll < finalComputerRoll) {
        setResult('You lose!');
      } else if (finalPlayerRoll === finalComputerRoll) {
        setResult('It\'s a tie!');
      }
    }, 2000);
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      <div className='max-w-4xl mx-auto mt-10 p-6 text-center'>
        <h1 className='pacifico-regular text-8xl font-medium text-gray-500'>Draw</h1>
        <div className='my-6 flex flex-row justify-between items-center space-y-4'>
          <div className='flex flex-col justify-between'>
            <h2 className='pacifico-regular text-4xl font-medium text-green-500'>{playerName}'s Roll: {playerRoll}</h2>
            <img className='mx-auto' src={`${import.meta.env.BASE_URL}images/dice${playerRoll}.png`} alt={`Player rolled ${playerRoll}`} />
          </div>
          <div className='flex flex-col justify-between'>
            <h2 className='pacifico-regular text-4xl font-medium text-green-500'>Computer's Roll: {computerRoll}</h2>
            <img className='mx-auto' src={`${import.meta.env.BASE_URL}images/dice${computerRoll}.png`} alt={`Computer rolled ${computerRoll}`} />
          </div>
        </div>
        {result && <h2 className='text-4xl font-medium text-purple-500 mb-4'>{result}</h2>}
        <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={rollDice} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice'}
        </button> 
      </div>
    </div>
  )
}

export default App
