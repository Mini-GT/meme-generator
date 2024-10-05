import { useState } from "react"

export default function FormInput() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })
  /**
   * Challenge: Track the applicant's last name as well
   */
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = e. target;

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
    </form>
    
  )
}
