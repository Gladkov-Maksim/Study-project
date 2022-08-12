import styles from './YandexPartner.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useRef, useState} from "react";
import {addCard, add} from "../../redux/reducers";

const patterns = {
    name: /./,
    currentPrice: /^\d+$/,
    initialPrice: /^\d+$/,
}

const initialErrors = {
    name: true,
    currentPrice: true,
    initialPrice: true,
}

const initialTouched = {
    name: false,
    currentPrice: false,
    initialPrice: false,
}


const YandexPartner = () => {

    const dispatch = useDispatch()
    const name = useRef(null)
    const currentPrice = useRef(null)
    const initialPrice = useRef(null)
    const photo = useRef(null)

    const [errors, setErrors] = useState(initialErrors)

    const [touched, setTouched] = useState(initialTouched)

    const [checkMark, setCheckMark] = useState(false)

    const valid = useCallback((field) => (e) => {
        setTouched(prev => ({...prev, [field]: true}))
        if (!patterns[field].test(e.target.value)) {
            setErrors(prev => ({...prev, [field]: true}))
        }
        else {
            setErrors(prev => ({...prev, [field]: false}))
        }
    }, [])

    const handleAddCard = () => {
        const fieldVerification = Object.values(errors).filter(item => {
            if (item === true) return item
        })
        if (fieldVerification.length === 0 && checkMark === true) {
            dispatch(add(addCard(name, currentPrice, initialPrice, photo)))
            name.current.value = ''
            currentPrice.current.value = ''
            initialPrice.current.value = ''
            photo.current.value = ''
            setCheckMark(false)
            setErrors(initialErrors)
            setTouched(initialTouched)
        }
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span>Я</span>ндекс партнер
            </div>
            <div>
                <div className={styles.inputField}>
                    <div>Название</div>
                    <input ref={name} onBlur={valid('name')}/>
                </div>
                <div className={styles.error}>
                    {errors.name && touched.name ? 'Пустое поле' : ''}
                </div>
                <div className={styles.inputField}>
                    <div>Цена</div>
                    <input ref={currentPrice} onBlur={valid('currentPrice')}/>
                </div>
                <div className={styles.error}>
                    {errors.currentPrice && touched.currentPrice ? 'Поле может содержать только число' : ''}
                </div>
                <div className={styles.inputField}>
                    <div>Цена до скидки</div>
                    <input ref={initialPrice} onBlur={valid('initialPrice')}/>
                </div>
                <div className={styles.error}>
                    {errors.initialPrice && touched.initialPrice ? 'Поле может содержать только число' : ''}
                </div>
                <div className={styles.inputField}>
                    <div>Фото</div>
                    <div className={styles.photo}>
                        <input
                            id="photo"
                            // accept="image/*"
                            type="file"
                            ref={photo}
                            className={styles.photo}
                            onChange={(e) => setCheckMark(!!e.target.value)}
                        />
                        <label htmlFor="photo">
                            <div className={styles.button}>Выберите фото</div>
                        </label>
                        {checkMark ? <div className={styles.checkMark}>✔</div> : ''}
                    </div>
                </div>
            </div>
            <div>
                <button className={styles.button} onClick={handleAddCard}>
                    Добавить карточку
                </button>
            </div>
        </div>
    )

}

export default YandexPartner