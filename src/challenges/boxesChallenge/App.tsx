import { useState } from "react"
import Box from "./Box"
import boxes from "./boxes"

type DarkModeProps = {
  darkMode: boolean
}

export default function App({darkMode}: DarkModeProps) {
  const [boxItem, setBoxItem] = useState(boxes)

  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
  
  return (
    <main>
      {
      boxItem.map((box) => {
        return (
        <Box
          key={box.id}
          on={box.on}
        />
        )
      })
      }
    </main>
  )
}
