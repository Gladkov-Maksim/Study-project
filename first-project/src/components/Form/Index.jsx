import {useState} from "react";
import styles from "./index.module.css"

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
      <input className={styles.input} type="password" autoComplete="off" />
      <input className={styles.input} type="radio" name="a"/>
      <input className={styles.input} type="radio" name="a"/>
      <button>Send</button>
    </form>
  )
}

export default Form