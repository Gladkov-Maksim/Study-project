import {useState} from "react";

const FunctionalComponent = () => {
    const [state, setState] = useState(0)

    return (
        <div>
            <button
                onClick={() => setState(prev => prev + 1)}
            >+</button>
            <span>{state}</span>
            <button
                onClick={() => setState(prev => prev - 1)}
            >-</button>
        </div>
    )
}

export default FunctionalComponent