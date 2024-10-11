import { useEffect, useState } from "react"

export default function WindowTracker() {
  /**
   * Challenge:
   * 1. Create state called `windowWidth`, default to 
   *    `window.innerWidth`
   * 2. When the window width changes, update the state
   * 3. Display the window width in the h1 so it updates
   *    every time it changes
   */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  //any code we want that is outside the react will most certainly use `useEffect` like example we listen the width size of the browser which is outside reach of react
  useEffect(() => {
    function setWidth() {
      console.log(window.innerWidth)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', setWidth)

    //(a way to handle a component that is unmounted)= we do clean up to avoid memory leak because in StateEffect.tsx, 
    //even in we dont show the component, the listener will still run thats why we have to do cleanup. 
    //keep in mind that if we dont use the component, we should also disable its functionality so it wont run in the background(this is sometimes true and not)
    //explanation: click this link (https://v2.scrimba.com/learn-react-c0e/~044)
    return function () {
      console.log("removing event listener")
      window.removeEventListener('resize', setWidth)
    }
  })

  return (
      <h1 className="width-info">Window width: {windowWidth}</h1>
  )
}
