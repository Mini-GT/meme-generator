import { useState } from "react"

export default function FormInput() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  /**
   * Challenge: add an email field/state to the form
   */
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

  }

  
  return (
    
    <form>
      <p>{formData.firstName}</p>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        // always add value attribute to the form input to ensure that it is in sync with the state
        value={formData.firstName}
      />

      <p>{formData.lastName}</p>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />

      <p>{formData.email}</p>
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
    </form>
    
  )
}
