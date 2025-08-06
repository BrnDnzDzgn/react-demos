import { useState } from "react"

const FunctionalState = () => {

  const [count, setCount] = useState(() => {
    const initialCount = 10
    return initialCount
  })

  const incrementCount = () => {
    setCount((prevcount) => prevcount + 1)
  }
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  )
}

export default FunctionalState

/* 

  1. Direct Update: setCount(count + 1)

    This is the straightforward way to update state. You're using the current count value from the closure and adding 1 to it.

  2. Functional Update: setCount((prevcount) => prevcount + 1)

    This uses React's functional update form. Here's why it works:

    React provides the previous state value as an argument to the function you pass to setCount
    prevcount is a parameter name you choose - it could be named anything (like prev, previousCount, etc.)
    React automatically injects the current state value as this parameter when it executes the function 
  
*/