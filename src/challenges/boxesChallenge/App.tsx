import { useState } from "react"
import boxes from "./boxes"

export default function App() {
  const [boxItem, setBoxItem] = useState(boxes)

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
          />
        )
      })}
    </main>
  )
}
