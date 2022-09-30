import './TVChannels.css'
import tvLogo from './img/ctv1.png'
import magnifierImg from './img/search.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from 'react';
import { getData, search } from '../redux/slise'

const filterList = (channels, sub) => {
    const regexp = new RegExp(`^${sub}`, 'i')
    return (channels.filter(item => {
        if (regexp.test(item.name_ru)) {
            return item
        }
    }))
}

const debounce = (fn) => {
    let timer
    return function (value){
        clearTimeout(timer)
        timer = setTimeout(fn.bind(null, value), 500)
    }
}

export const TVChannels = () => {

    const state = useSelector(store => store.response)
    const dispatch = useDispatch()
    const searchInput = useRef(null)

    const data = state.data

    useEffect(() => {
        dispatch(getData())
    }, [])

    const searchDebounce = debounce((value) => dispatch(search(filterList(data.channels, value))))

    return (
        <>
            <div className="background"></div>
            <div className="header">
                <img src={magnifierImg} alt="Лупа"/>
                <img src={tvLogo} alt="Логотип ТВ"/>
                <input
                    ref={searchInput}
                    onChange={(e) => {
                    searchDebounce(e.target.value)
                }}/>
            </div>
            <div className="channelsList">
                {
                    (() => {
                        if (data) {
                            return (searchInput.current.value ? state.search : data.channels).map((item, i) => {
                                return (
                                    <div className="channelWrapper" key={item.name_ru + i}>
                                        <div>
                                            <img src={item.image} alt="Логотип канала"/>
                                            <div className="channelName">
                                                <span>{i + 1}.</span> <span>{item.name_ru}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        else {
                            return ''
                        }
                    })()
                }
            </div>
        </>
    )
}

