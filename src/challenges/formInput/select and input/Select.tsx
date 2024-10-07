import { useState } from "react"
export default function Select() {
  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      comments: "", 
      isFriendly: false,
      employment: "",
      favColor: ""
    }
  )
  // console.log(formData.favColor)
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement |HTMLSelectElement>) {
    const {name, value, type} = e.target
    setFormData(prevFormData => {
      
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? !formData.isFriendly : value
      }
    })
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    //preventDefault() will prevent the page to refresh when the submit button is clicked / in other words it will prevent our app to re-render, after that, it will put our obj properties into the url params
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    // when a button is found inside the form, it will trigger the form handler onSubmit={}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea 
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
      <input 
        type="checkbox" 
        id="isFriendly" 
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      
      <fieldset>
        <legend>Current employment status</legend>
        <input 
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        
        <input 
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        
        <input 
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />
      
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select 
        className="border"
        id="favColor"
        name="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      {/* button element inside a form will act as a submit, therefore it has a default attribute of type="submit" */}
      <button className="border">Submit</button>
    </form>
  )
}
