import { useState } from "react"

export default function FormInput() {
  const [formData, setFormData] = useState({
    //we can put the `name` attributes from our form
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    isFriendly: false,
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
    //instead of `checked`, we use `type` then do guardclose in the setFormData cause if not, typescript will give us error
    const {name, value, type /* checked */ } = e.target;
    console.log(type)

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? !prevFormData.isFriendly : value
      }
    })

  }

  
  return (
    
    <form className="flex flex-col justify-between w-[30vw] m-2">
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
      
      <div>
        {/* 
        
        2 ways to use input label: either separate input and label then use attribute `htmlFor and id` or put the input inside the label(example 2) 
        
        why do this? so that when the user clicked on the `Are you friendly?` it will also be connected to the checkbox rather than pointing the cursor exactly at the checkbox
        
        */}
        <input 
          type="checkbox"
          id="isFriendly"
          onChange={handleChange}
          name="isFriendly"
          //in checkbox, instead of value, we use `checked`
          checked={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>

      <div>
        {/* example 2 */}
        <label>
          <input 
            type="checkbox"
          />
          Are you friendly?
        </label>
      </div>
    </form>
    
  )
}
