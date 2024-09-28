import { useState } from "react"
import boxes from "./boxes"

type DarkModeProps = {
  darkMode: boolean
}

export default function App({darkMode}: DarkModeProps) {
  const [boxItem, setBoxItem] = useState(boxes)

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc"
  }

  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */
  
  return (
    <main>
      {boxItem.map((box) => {
        return (
          <div 
            key={box.id}
            className="border border-black w-4 p-5 m-1"
            style={styles}
          />
        )
      })}
    </main>
  )
}
