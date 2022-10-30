import styles from './header.module.css'

export default function Header () {
    return ( // КАК ЭТО ИСПРАВИТЬ???
        <header>
            <div className={styles.wrapper}>
                <div>Лого</div>
                <div>Каталог ▼</div>
                <div>Монтаж ▼</div>
                <div>Контакты ▼</div>
                <div>+7-902-361-96-24</div>
                <div>Расчитать монтаж</div>
            </div>
        </header>
    )
}