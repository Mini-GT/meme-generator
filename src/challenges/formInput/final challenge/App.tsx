import Checkbox from "./components/Checkbox"
import Form from "./components/Form"
import Signup from "./components/Signup"
import { FormDataType } from "./types"
import { useId, useState } from "react"

function App() {

/**
 * Challenge: Connect the form to local state
 * 
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the 
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */

const [formData, setFormData] = useState<FormDataType>({
  email: "",
  password: "",
  confirmPassword: "",
  isJoined: false
})

console.log(formData)

function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  const {value, name, type} = e.target // Destructure checked for checkboxes
  setFormData(prevData => {
    return {
      ...prevData,
      [name]: type === 'checkbox' ? !formData.isJoined : value // Use checked for checkbox
    }
  })
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {  // Use FormEvent type
  e.preventDefault() // Prevent default form submission
  if(formData.password === formData.confirmPassword) {
    console.log("Successfully signed up")
    console.log(formData.isJoined ? "Thanks for signing up for our newsletter!" : "")
  } else {
    console.log("passwords do not match")
  }
}

const id = useId();

  return (
    <form 
      className="flex justify-center items-center m-auto mt-20 rounded-lg bg-white w-[30%]"
      onSubmit={handleSubmit}
    >
      <div className="my-4">
        <Form
          id={id}
          handleChange={handleChange}
        />
        <Checkbox
          id={id}
          formData={formData}
          handleChange={handleChange} 
        />
        <Signup
          id={id}
        />
      </div>
    </form>
  )
}

export default App
