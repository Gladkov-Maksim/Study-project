import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Можно отрендерить запасной UI произвольного вида
        return <h1>Что-то пошло не так.</h1>;
      }
  
      return this.props.children; 
    }
  }

const Number = ({number}) => {
    console.log(number)
    return number.currentNumber()
}

class ClassComponent extends React.Component {
    constructor (props){
        super(props)
        this.state = {currentNumber: 0}
    }
    
    render () {
        return (
            <div>

                <button
                    onClick={() => this.setState({currentNumber: this.state.currentNumber - 1})}
                >-</button>
                <span><ErrorBoundary><Number number={this.state.currentNumber}/></ErrorBoundary></span>
                <button
                    onClick={() => this.setState({currentNumber: this.state.currentNumber + 1})}
                >+</button>
                <button>error</button>
            </div>
            )
    }
}

export default ClassComponent