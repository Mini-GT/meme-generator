import {useState, useEffect} from "react"

export default function PageUseEffect() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(0)
    
    console.log("Component rendered")
    
    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    
    useEffect(() => {
        console.log("Effect function ran")
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


