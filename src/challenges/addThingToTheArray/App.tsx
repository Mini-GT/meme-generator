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
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  //setThingsArray(1)


  function addThing() {
    
  }
      
  return (
    <div className="bg-[#70B85D] h-screen px-20 py-10">
        <button className="border-4 p-4 w-full rounded-full text-white text-2xl" onClick={addThing}>Add Item</button>
        <div className="text-white text-2xl my-4">
          {thingsArray}
        </div>
    </div>
  )
}
