import {useState} from "react";

const validation = (values) => {
  const errors = {}

  if(!values.name) errors.name = "Field name is required"

  return errors
}


const Form = () => {
  const [formData, setFormData] = useState({name: "", password: "", a: null})

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(formData)
    }}>
      <input
        type="text"
        placeholder="name"
        // autoComplete="off"
        onChange={(e) => setFormData(prev => ({name: e.target.value, password: prev.password, a: prev.a}))}
      />
      <input type="password" autoComplete="off" />
      <input type="radio" name="a"/>
      <input type="radio" name="a"/>
      <button>Send</button>
    </form>
  )
}

export default Form