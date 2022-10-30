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
    if (values.name && !patterns.name.test(values.name)) errors.name = 'Имя должно содержать только кириллицу и начинаться с заглавной буквы'
    if (!values.lastName) errors.lastName = 'Фамилия не заполнена'
    if (values.lastName && !patterns.lastName.test(values.lastName)) errors.lastName = 'Фамилия должна содержать только кириллицу и начинаться с заглавной буквы'
    if (!values.email) errors.email = 'Email не заполнен'
    if (values.email && !patterns.email.test(values.email)) errors.email = 'Некорректный формат Email'
    if (!values.password) errors.password = 'Пароль не заполнен'
    if (values.password && !patterns.password.test(values.password)) errors.password = 'Пароль должен содержать больше 8 символов'
    return errors
}

const Validation = () => {
    const [formData, setFormData] = useState({name: '', surname: '', email: '', password: ''})
    const [errors, setErrors] = useState(valid(formData))
    const [touches, setTouches] = useState({name: false, lastName: false, email: false, password: false})

    const handleChangeInput = (field) => (e) => setFormData(prev => {
        const newData = { ...prev, [field]: e.target.value }
        setErrors(valid(newData))
        return newData
    })

    const handleTouched = (field) => () => setTouches({...touches, [field] : true})

    return (
        <>
            <div className={styles.componentName}>ВАЛИДАЦИЯ</div>
            <div className={styles.wrapper}>
                <div></div>
                <div className={styles.header}>Sign up for a free account</div>
                <div className={styles.nameAndLastName}>
                    <div>
                        <input
                            type="text"
                            value={formData.name}
                            placeholder="First name"
                            onChange={handleChangeInput('name')}
                            onBlur={handleTouched('name')}
                        />
                        <div>
                            {errors.name && touches.name && <div className={styles.error}>{errors.name}</div>}
                        </div>
                    </div>
                    <div>
                        <input
                            placeholder="Last name"
                            type="text"
                            onChange={handleChangeInput('lastName')}
                            onBlur={handleTouched('lastName')}
                        />
                        <div>
                            {errors.lastName && touches.lastName && <div className={styles.error}>{errors.lastName}</div>}
                        </div>
                    </div>
                </div>
                <div className={styles.email}>
                    <input
                        placeholder="Email address"
                        type="email"
                        onChange={handleChangeInput('email')}
                        onBlur={handleTouched('email')}/>
                    <div>
                        {errors.email && touches.email && <div className={styles.error}>{errors.email}</div>}
                    </div>
                </div>
                <div className={styles.password}>
                    <input
                        placeholder="Create password"
                        type="password"
                        onChange={handleChangeInput('password')}
                        onBlur={handleTouched('password')}/>
                    <div>
                        {errors.password && touches.password && <div className={styles.error}>{errors.password}</div>}
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <button
                        disabled={false}
                        onClick={() => {
                            alert(`
                            Имя:  ${formData.name ? formData.name : 'пусто'}\n
                            Фамилия:  ${formData.lastName ? formData.lastName : 'пусто'}\n
                            Email:  ${formData.email ? formData.email : 'пусто'}\n
                            Пароль:  ${formData.password ? formData.password : 'пусто'
                            }`)
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </>

    )
}

export default Validation