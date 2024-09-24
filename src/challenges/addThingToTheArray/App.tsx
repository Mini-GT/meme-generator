import { useState } from "react"

export default function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
  //const thingsArray = ["Thing 1", "Thing 2"]

  //note: never EVER!!! directly modify the state value which is (e.g `thingsArray` state)
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addThing() {
    //it is best to use a callback that returns a value so that we can check our oldState rather that passing a new value
    setThingsArray(prevThingsArray => [
      ...prevThingsArray, 
      `Thing ${prevThingsArray.length + 1}`
    ])
  }

  const thingsElements = thingsArray.map(thing => <p className="my-4" key={thing}>{thing}</p>)
      
  return (
    <div className="bg-[#70B85D] h-full px-20 py-10">
        <button className="border-4 p-4 w-full rounded-full text-white text-2xl" onClick={addThing}>Add Item</button>
        <div className="text-white text-2xl my-4">
          {thingsElements}
        </div>
    </div>
  )
}
