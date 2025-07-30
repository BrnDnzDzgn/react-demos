import { useState } from "react"

const UseStateEx = () => {
  const counter = useState(0)
  console.log(counter)

  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const [friends, setFriends] = useState(['John', 'Doe'])
  const addBora = () => setFriends([...friends, "Bora"])
  const removeBora = () => setFriends(friends.filter((f) => f != "Bora"))

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {friends.map(f => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addBora}>Add Bora as a friend</button> <br />
      <button onClick={removeBora}>Remove Bora from friends</button>
    </div>
  )
}

export default UseStateEx