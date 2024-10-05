import { useState } from "react"

export default function FormInput() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  /**
   * Challenge: Track the applicant's last name as well
   */
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value)
  }

  function handleChanges(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value)
  }
  
  return (
    
    <form>
      <p>{firstName}</p>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />

      <p>{lastName}</p>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChanges}
      />
    </form>
    
  )
}
