import styles from './YandexMarket.module.css'
import {useSelector} from "react-redux";

// const data = [
//     {name: 'Iphone 12', currentPrice: '20000', initialPrice: '22000', photo: 'https://iphoriya.ru/wp-content/uploads/iphone-12-mini-white-select-2020.jpg'},
//     {name: 'Холодильник Haier', currentPrice: '25000', initialPrice: '32000', photo: 'https://next24.ru/upload/iblock/d1a/20035898b.jpg'},
//     {name: 'Сумка Balenciaga limited edition', currentPrice: '3000', initialPrice: '3500', photo: 'https://static.oskelly.ru/img/product/65701/item-8d834ffb-7164-4a89-8c75-953f15c4b585'},
//     {name: 'Граненый стакан', currentPrice: '460', initialPrice: '600', photo: 'https://o-pencil.ru/upload/iblock/d14/d140b47827607361089b29cba6a2b8af.jpg'},
//     {name: 'Письменный стол', currentPrice: '8000', initialPrice: '11000', photo: 'https://www.dommebeli.spb.ru/upload/iblock/d48/d4855aff81b62420a8673ee24604a0ea.jpg'},
//     {name: 'Наушники Air Pods 2', currentPrice: '10000', initialPrice: '', photo: 'https://ispot.ru/upload/iblock/3a4/airpods-5.jpg'},
//     {name: 'Колонка портитивная JBL Flip 5', currentPrice: '8600', initialPrice: '', photo: 'https://boom-room.ru/wa-data/public/shop/products/52/24/12452/images/17401/17401.970.jpg'},
//     {name: 'Mercedes e-classe coupe', currentPrice: '6280000', initialPrice: '', photo: 'https://img.incacar.com/cars/Mercedes-Benz/E-Class/2018/4172dfb81ced9f1b38afeb93f54ddf4a.jpg'},
// ]

const addSpace = (str) => {
    let arr = str.split('')
    for (let i = arr.length - 3; i >= 0; i -= 3) {
        arr.splice(i, 0, ' ')
    }
    return <div>
        {arr.join('')} <span>₽</span>
    </div>
}

const addPoints = (str) => {
    if (str.length > 27) {
        let arr = str.split('')
        return arr.slice(0, 27).join('') + '...'
    }
    else return str
}

const YandexMarket = () => {

    const data = useSelector(store => store.data)

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span>Я</span>ндекс маркет
            </div>
            <div className={styles.cardPlace}>
                {data.map((item, i) => {
                    return (
                        <div key={`${i} ${item.name}`} className={styles.productCard}>
                            {/*<img src={URL.createObjectURL(item.photo)}/>*/}
                            <div className={styles.productPhoto} style={{backgroundImage: `url(${URL.createObjectURL(item.photo)})`}}></div>
                            <div className={styles.priceContainer}>
                                {addSpace(item.currentPrice)}
                                {addSpace(item.initialPrice)}
                            </div>
                            <div>
                                {addPoints(item.name)}
                            </div>
                        </div>
                        )
                })}
            </div>
        </div>
        )
}

export default YandexMarket