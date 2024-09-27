import {useState} from "react"
import Star from "./Star"

export default function App() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    function toggleFavorite() {
        //state rule: never change the original state value, therefore we must first copy the state value in this case an object, then we modify the value
        setContact(prevState => ({
            ...prevState, 
            isFavorite: !prevState.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="/svg/profile.svg" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} />
                    <h2 className="card--name">
                      {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
