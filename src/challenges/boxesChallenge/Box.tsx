import { useState } from "react"

export default function Box({
  id,
  on,
  // toggle
} : {
  id: number
  on: boolean
  // toggle: (id: number) => void
}) {

  const [isOn, setIsOn] = useState(on)

  /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

  const styles = {
    backgroundColor: isOn ? "#222222" : "transparent"
  }

  function isTogggled() {
    setIsOn(prevState => !prevState)
  }

  return (
    <button onClick={isTogggled /*() => toggle(id)*/}>
      <div
        className="border box-border border-black w-4 p-5 m-1"
        style={styles}
      />
    </button>
    
  )
}
