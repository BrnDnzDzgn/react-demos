const Copy = () => {

  const copyHandler = () => {
    alert("Don't steal my content!")
    console.log("Don't copy me!!")
  }

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt praesentium officiis dolore facilis excepturi eos fugit veniam quod velit rem tempore nulla doloremque commodi odio explicabo, ut laborum nihil.
    </p>
  )
}

export default Copy