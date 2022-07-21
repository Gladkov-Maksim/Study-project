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
        const list = props.list.map(item => {
            if (item.date) {
                const year = item.date.slice(0, 4)
                return {...item, year: year}
            }
        })
        //props.list = list
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
    console.log(list, 111111111111111111111111111111111111111111111111111111111111)
        return (
            <div id="app">
                <MonthTable list={list} />
                <ModernYear list={list} />
                <SortTable list={list} />
            </div>
        )
}