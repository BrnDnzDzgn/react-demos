import { useState } from "react"
import ComponentOne from "./ShareStateComponents/ComponentOne"
import ComponentTwo from "./ShareStateComponents/ComponentTwo"

const ShareState = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 2)}/>
    </div>
  )
}

export default ShareState