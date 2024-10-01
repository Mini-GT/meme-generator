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
  

  function toggle(id: number): void {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     * 
     * Make sure not to directly modify state!
     * 
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */


    // below this code is not working anymore because react has now changed on how `useState` works
    /*
      type Boxes = {
        id: number
        on: boolean
      }

      setBoxItem(prevBox => {
        const newBox: Boxes[] = []
        prevBox.map((boxItem) => {
          if(boxItem.id === id) {
            const updatedBoxItem: Boxes = {
              ...boxItem,
              on: !boxItem.on
            }
            newBox.push(updatedBoxItem)
          }else {
            newBox.push(boxItem)
          }
        })
        return newBox;
      })
    */
  }
  return (
    <main>
      {
      boxItem.map((box) => {
        return (
        <Box
          key={box.id}
          id={box.id}
          on={box.on}
          toggle={toggle}
        />
        )
      })
      }
    </main>
  )
}
