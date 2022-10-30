import './App.css';
import Image from './components/image.jsx'
import InputDoubler from './components/Input-doubler/Input-doubler'
import InputNumber from './components/Input-number/Input-number'
import Validation from './components/Validation/Validation'
import ToDo from './components/ToDo/ToDo'
import ColorConverter from './components/Color-converter/Color-converter'
// import {Stopwatch, Timer} from './components/LifeCycles'
// import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <InputDoubler />
        <InputNumber />
        <Validation />
        <ToDo />
        <ColorConverter />
        {/*<Timer />*/}
        {/*<Counter defaultCount={2}/>*/}
      </header>
    </div>
  );
}

export default App;
