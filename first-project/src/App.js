
import './App.css';
import Paragraph from './components/paragraph.jsx'
import Link from './components/link.jsx'
import Image from './components/image.jsx'
import Table from './components/table/table.jsx'
import Form from './components/Form/Index'
import ReactTable from './components/React-table/React-table'
import InputDoubler from './components/Input-doubler/Input-doubler'
import InputNumber from './components/Input-number/Input-number'
import Validation from './components/Validation/Validation'
import Dropdown from './components/Dropdown/Dropdown'
import ToDo from './components/ToDo/ToDo'
import ColorConverter from './components/Color-converter/Color-converter'

const headersArr = ['id', 'name', 'surname', 'age']
const tableContent = [{ id: 1, name: "Петр", surname: "Васичкин", age: 22 }, { id: 2, name: "Василий", surname: "Иванов", age: 12 }, { id: 3, name: "Иван", surname: "Сидоров", age: 32 }]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <Paragraph>Edit <code>src/App.js</code> and save to reload.</Paragraph>
        <Link to="https://reactjs.org" />
        <Table headers={headersArr} content={tableContent}/>
        <Form/>
        {/* <ReactTable/> */}
        <InputDoubler />
        <InputNumber />
        <Validation />
        <Dropdown />
        <ToDo />
        <ColorConverter />
      </header>
    </div>
  );
}

export default App;
