import {useDispatch, useSelector} from "react-redux";
import {changeCounter, resetCounter, CounterSelector} from "./redux/reducers";

import './App.css';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(CounterSelector)

  return (
    <div className="App">
      <button onClick={() => dispatch(changeCounter(counter + 1))}>Up</button>
      <button onClick={() => dispatch(changeCounter(counter - 1))}>Down</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      {counter}
    </div>
  );
}

export default App;