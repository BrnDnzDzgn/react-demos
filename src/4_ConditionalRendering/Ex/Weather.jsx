const Weather = ({temperature}) => {

  return (
    <div>
      {temperature<15 && <p>It is cold outside!</p>}
      {temperature>=15 && temperature<=25 && <p>It is nice outside!</p>}
      {temperature>25 && <p>It is hot outside!</p>}
    </div>
  )
}

export default Weather