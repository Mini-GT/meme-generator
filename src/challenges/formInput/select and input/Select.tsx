import { useState, useId } from "react"

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

  const id = useId();
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
      <label htmlFor={id + '-firstName'}>First Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        id={id + '-firstName'}
      />

      <label htmlFor={id + '-lastName'}>Last Name</label>
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
        id={id + '-lastName'}
      />

      <label htmlFor={id + '-email'}>Email</label>
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        id={id + '-email'}
      />

      <label htmlFor={id + '-comments'}>Comments</label>
      <textarea 
        onChange={handleChange}
        name="comments"
        value={formData.comments}
        id={id + '-comments'}
      />
      <input 
        onChange={handleChange}
        name="isFriendly"
        type="checkbox"  
        checked={formData.isFriendly}
        id={id + "-isFriendly"}
      />
      <label htmlFor={id + "-isFriendly"}>Are you friendly?</label>
      <br />
      <br />
      
      <fieldset>
        <legend>Current employment status</legend>
        <input
          onChange={handleChange}
          name="employment" 
          type="radio"         
          value="unemployed"
          checked={formData.employment === "unemployed"}
          id={id + "-unemployed"}
        />
        <label htmlFor={id + "-unemployed"}>Unemployed</label>
        <br />
        
        <input
          onChange={handleChange}
          name="employment" 
          type="radio"
          value="part-time"         
          checked={formData.employment === "part-time"}
          id={id + "-part-time"}
        />
        <label htmlFor={id + "-part-time"}>Part-time</label>
        <br />
        
        <input
          onChange={handleChange}
          name="employment" 
          type="radio"       
          value="full-time"
          checked={formData.employment === "full-time"}
          id={id + "-full-time"}
        />
        <label htmlFor={id + "-full-time"}>Full-time</label>
        <br />
      </fieldset>
      <br />
      
      <label htmlFor={id + "-favColor"}>What is your favorite color?</label>
      <br />
      <select 
        className="border"
        onChange={handleChange}
        name="favColor"
        value={formData.favColor}
        id={id + "-favColor"}
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
