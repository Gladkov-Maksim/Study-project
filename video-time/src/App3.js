import React, {useEffect, useState} from 'react';
import axios from "axios";

function YearTable(props) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function yearHOC (Component) {
    return function (props) {
        const groupObj = {}
        props.list.forEach(item => {
            if (item.date) {
                const year = item.date.slice(0, 4)
                if (groupObj[year]) {
                    groupObj[year] += item.amount
                }
                else {
                    groupObj[year] = item.amount
                }
            }
        })
        const keys = Object.keys(groupObj)
        const list = keys.map( key => {
            const obj = {}
            obj.year = key
            obj.amount = groupObj[key]
            return obj
        })
        return Component.apply(null, [Object.assign({}, props, {list:list})])
    }
}
const ModernYear = yearHOC(YearTable)

function SortTable(props) {
    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function sortHOC (Component) {
    return function (props) {
        const list = props.list
        list.sort((a, b) => {
            return Number(new Date(b.date)) - Number(new Date(a.date))
        })
        return Component.apply(null, [{...props, list: list}])
    }
}

const ModernSort = sortHOC(SortTable)

function MonthTable(props) {
    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

function monthHOC (Component) {
    return function (props) {
        const groupObj = {}
        props.list.forEach(item => {
            const year = item.date.slice(0, 4)
            if (year === '2018' && item.date) {
                const month = item.date.slice(5, 7)
                if (groupObj[month]) {
                    groupObj[month] += item.amount
                }
                else {
                    groupObj[month] = item.amount
                }
            }
        })
        const keys = Object.keys(groupObj)
        keys.sort((a, b) => a - b)

        const monthsNames = {'01':'Jan',
                             '02': 'Feb',
                             '03': 'Mar',
                             '04': 'Apr',
                             '05': 'May',
                             '06': 'Jun',
                             '07': 'Jul',
                             '08': 'Aug',
                             '09': 'Sep',
                             '10': 'Okt',
                             '11': 'Nov',
                             '12': 'Dec'} // Есть ли каой-то вариант избежать этот колхоз


        const list = keys.map( key => {
            const obj = {}
            obj.month = monthsNames[key]
            obj.amount = groupObj[key]
            return obj
        })
        return Component.apply(null, [Object.assign({}, props, {list: list})])
    }
}

const ModernMonth = monthHOC(MonthTable)

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state
export default function App () {
    // state = {
    //     list: []
    // };
    const [state, setState] = useState({ list: [] })
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json').then(res => {
            setState(res.data)
        })
    }, [])
        const {list} = state;
        return (
            <div id="app">
                <ModernMonth list={list} />
                <ModernYear list={list} />
                <ModernSort list={list} />
            </div>
        )
}