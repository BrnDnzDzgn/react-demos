import { useState } from "react"

const ObjectEx = () => {

  const  [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7
  })

  const [movies, setMovies] = useState([
    {id: 1, title: "Spider Man", ratings: 3},
    {id: 2, title: "Batman", ratings: 8},
  ])

  const handleClick = () => { setMovie({...movie, ratings: 5}) }

  const changeName = () => {
    setMovies(
      movies.map(m => (m.id == 1 ? {...movies, title: "John Wick 5"} : m))
    )
  }

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>

      <button onClick={handleClick}>Change Rating</button>

      <br />

      {movies.map(m => (
        <li key={Math.random()}>{m.title}</li>
      ))}
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default ObjectEx