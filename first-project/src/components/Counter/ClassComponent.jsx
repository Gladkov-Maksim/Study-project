import React from "react";

class ClassComponent extends React.Component {
    constructor (props){
        super(props)
        this.state = {currentNumber: 0}
    }
    componentDidCatch(error, errorInfo) {
        console.log(error)
    }
    static getDerivedStateFromError(error) {
        console.log(error)
    }
    render () {
        return (
            <div>

                <button
                    onClick={() => this.setState({currentNumber: this.state.currentNumber - 1})}
                >-</button>
                <span>{this.state.currentNumber}</span>
                <button
                    onClick={() => this.setState({currentNumber: this.state.currentNumber + 1})}
                >+</button>
                <button
                    onClick={()=> {
                        const x = 0
                        x = 9
                    }}
                >error</button>
            </div>
            )
    }
}

export default ClassComponent