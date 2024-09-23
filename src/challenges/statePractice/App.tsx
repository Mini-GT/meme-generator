import { useState } from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = useState(0)

    function addCount() {
      setCount(count + 1)
    }

    function minusCount() {
      setCount(count - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusCount}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={addCount}>+</button>
        </div>
    )
}
