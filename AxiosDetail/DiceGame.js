import React, { useState } from 'react';

function DiceGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  
  const gameStartHandler = () => {
    setGameStarted(true);
  };

  const onNumberClick = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const genRandomNumber = () => {
    if (!selectedNumber) {
      setError("Please Select A Number");
      return;
    }

    const generatedNumber = Math.floor(Math.random() * 6 + 1);
    setDice(generatedNumber);

    if (selectedNumber === generatedNumber) {
      setScore((prev) => prev + generatedNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <>
      {gameStarted ? (
        <>
          <h2 style={{ color: 'red', textAlign: 'center' }}>{error ? error : "Select A Number Please"}</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {numbers.map((num, index) => (
              <button
                key={index}
                style={{
                  margin: '10px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  backgroundColor: selectedNumber === num ? 'green' : 'white',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: '1px solid black',
                }}
                onClick={() => onNumberClick(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <br />
          <div style={{ textAlign: 'center' }}>
            <img src={`dice${dice}.png`} alt="dice" style={{ width: '100px', height: '100px', cursor: 'pointer' }} onClick={genRandomNumber} />
            <h1 style={{ fontSize: '24px', marginTop: '20px' }}>Score: {score}</h1>
            <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }} onClick={() => setScore(0)}>Reset</button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Dice Game In React</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <img src="dices.png" alt="dice" style={{ width: '300px', height: '300px' }} />
          </div>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={gameStartHandler}
          >
            Start Game
          </button>
        </div>
      )}
    </>
  );
}

export default DiceGame;
