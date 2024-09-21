/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

export default function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  function addThing(): undefined {
    thingsArray.push(`Thing ${thingsArray.length + 1}`)
    console.log(thingsArray)
  }
      
  return (
    <div className="m-4">
        <button className="border p-2" onClick={addThing}>Add Item</button>
        {thingsElements}
    </div>
  )
}
