import { useState } from "react"
import WindowTracker from "./WindowTracker"

export default function StateEffect() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */
  

  const [show, setShow] = useState(true)

  console.log(show)

  function handleClick() {
    setShow(prevState => !prevState)
  }

  return (
    <div className="container m-4">
      <button 
        className="border border-black"
        onClick={handleClick}
      >
        
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  )
  
}
