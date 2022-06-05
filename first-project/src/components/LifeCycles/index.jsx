import { useState, useEffect, useRef } from 'react'

const Clock = ({sec}) => { // почему sec в {}?
    const seconds = (sec % 60).toString()
    const minutes = (Math.floor(sec / 60)).toString()
    return <div> {minutes.padStart(2, '0')} : {seconds.padStart(2, '0')} </div>
}

export const Stopwatch = () => {
    const [sec, setSec] = useState(0)
    const [isLaunch, setIsLaunch] = useState(false)
    const timer = useRef(null)

    useEffect(() => {
        if (isLaunch) {
            timer.current = setInterval(() => {
                setSec(prev => prev + 1)
            }, 1000)
        } else {
            clearInterval(timer.current)
        }
    }, [isLaunch])

    return (
        <>
            <Clock sec={sec}/>
            <button
                onClick={() => setIsLaunch(!isLaunch)}
            >{isLaunch ? "Stop" : 'Start'}</button>
            <button
                onClick={() => {
                    setSec(0)
                    setIsLaunch(false)
                }}
            >Reset</button>
        </>
    )
}

const timeToSecFormatter = (timeString) => {
    const [ min, sec ] = timeString.split(':')
    return +min * 60 +  +sec
}

export const Timer = () => {
    const [ sec, setSec ] = useState(0)

    const [ isLaunch, setLaunch ] = useState(false)

    const timer = useRef(null)

    useEffect(() => {
        if (isLaunch) {
            timer.current = setInterval(() => {
                setSec(prev => prev > 0 ? prev - 1 : 0)
            }, 10)
        }
        else clearInterval(timer.current)
    }, [isLaunch])

    return (
        <>
            <Clock sec={sec}/>
            <input
                type="time"

                onChange={e => setSec(timeToSecFormatter(e.currentTarget.value))}
            />
            <button
                onClick={() => setLaunch(!isLaunch)}
            >{isLaunch ? 'stop' : 'start'}</button>
            <button
                onClick={() => {
                    clearTimeout(timer)
                    setSec(0)
                    setLaunch(false)
                }}
            >reset</button>
        </>
    )
}