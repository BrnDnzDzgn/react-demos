import React, { useState } from 'react'

const GenerateRandom = () => {

  const [randomNumber, setRandomNumber] = useState(() => 
    Math.floor(Math.random() * 100)
  )

  const generateRandom = () => {
    const newRandom = Math.floor(Math.random() * 100)
    setRandomNumber(newRandom)
  }

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandom}>Generate new random</button>
    </div>
  )
}

export default GenerateRandom