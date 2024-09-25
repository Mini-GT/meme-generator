import {useState} from "react"

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
    }
    
    return (
        <main>
            <article className="card">
                <img src="/svg/profile.svg" className="card--image" />
                <div className="card--info">
                    <img
                        src={`/svg/star.svg`} 
                        className="card--favorite w-8"
                        onClick={toggleFavorite}
                    />
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
