import { useState } from "react"

export default function FormInput() {
  const [formData, setFormData] = useState({
    //we can put the `name` attributes from our form
    firstName: "",
    lastName: "",
    email: "",
    description: ""
  })
  /**
   * Challenge: add an email field/state to the form
   */

  /**
  * Challenge: Add a textarea for "comments" to the form
  * Make sure to update state when it changes.
  */
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //name for the `name` attribute and value for the value which is collected or accessed from our form html elements
    const {name, value} = e.target;

    console.log(formData)

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

  }

  
  return (
    
    <form className="flex flex-col justify-between w-[30vw]">
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

      <textarea 
        className="my-2" 
        placeholder="description"
        onChange={handleChange}
        name="description"
        value={formData.description}
      />
    </form>
    
  )
}
