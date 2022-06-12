import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {count: props.defaultCount, another: "string"}
        // willMount
        console.log('will mount', this.state, this.props)
    }

    componentDidMount() {
        console.log('did mount', this.state, this.props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update', this.state, this.props)
    }

    componentWillUnmount() {
        console.log('did unmount', this.state, this.props)
    }

    componentDidCatch(error, errorInfo) {
        console.log('did catch', error, errorInfo)
    }

    static getDerivedStateFromError(error) {
        return {count : error}
    }


    render(){
        console.log('render ', this.state, this.props)
        return (
            <>
                <div
                    onClick={() => this.setState((state, props) => {
                        // t = 1
                        return {count: state.count + 1}
                    })}
                >{this.state.count}</div>
                <ClassComponent/>
                <div>
                    ---------------------------------------------
                </div>
                <FunctionalComponent/>
            </>
            )
    }
}


// willMount

// const Counter = (props) => {
//     const [count, setCount] = useState(props.defaultCount)
//     useEffect(() => {
//          // didMount
//     }, [])

//     useEffect(() => {
//      if(count !== props.defaultCount){
//          did Update count
//      }
//          // did Update count
//     }, [count])
//
//     return <div onClick={() => setState(prev => prev + 1)}>{1}</div>
// }

export default Counter