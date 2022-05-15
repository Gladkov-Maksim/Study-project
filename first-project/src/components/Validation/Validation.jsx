import { useState } from "react"
import styles from './Validation.module.css'

const patterns = {
    name: /^[А-Я][а-яё]+$/,
    lastName: /^[А-Я][а-яё]+/,
    email: /^[a-z]+@[a-z]+\.[a-z]{2,}$/,
    password: /.{8,}/
}

const valid = (values) => {
    const errors = {}
    if (!values.name) errors.name = 'Имя не заполнено'
    if (!patterns.name.test(values.name)) errors.name = 'Имя должно содержать только кириллицу и начинаться с заглавной буквы'
    if (!values.lastName) errors.lastName = 'Фамилия не заполнена'
    if (!values.email) errors.email = 'Email не заполнен'
    if (!values.password) errors.password = 'Пароль не заполнен'
    return errors
}

const Validation = () => {

    const [ formData, setFormData ] = useState({name: '', surname: '', email: '', password: ''})

    const [errors, setErrors ] = useState({})

    const visibleError = (typeOfInput) => {
        // console.log(state)
        return {display: (patterns[typeOfInput].test(formData[typeOfInput]) ? 'none': 'block')}
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>Sign up for a free account</div>
            <div className={styles.nameAndLastName}>
                <div>
                    <input 
                        value={formData.name} 
                        placeholder="First name" 
                        onChange={(e) => setFormData((prev) => {
                            const newData = { ...formData, name: e.target.value }
                            setErrors(valid(newData))
                            return newData
                        })} 
                        // onBlur={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                    <div className={styles.error}>{errors.name}</div>
                </div>
                <div>
                    <input placeholder="Last name" data-type="lastName"></input>
                    <div className={styles.error}>Неправильный формат фамилии</div>
                </div>
            </div>
            <div className={styles.email}>
                <input placeholder="Email address" data-type="email"></input>
                <div className={styles.error}>Неправильный формат Email</div>
            </div>
            <div className={styles.password}>
                <input placeholder="Create password" data-type="password"></input>
                <div className={styles.error}>Неправильный формат пароля</div>
            </div>
            <div className={styles.buttonWrapper}>
                <button disabled={false} onClick={() => console.log(1)}>Register</button>
            </div>
        </div>
    )
}

export default Validation