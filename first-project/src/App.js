import './App.css';
import Paragraph from './components/paragraph.jsx'
import Link from './components/link.jsx'
import Image from './components/image.jsx'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <Paragraph>Edit <code>src/App.js</code> and save to reload.</Paragraph>
        <Link to="https://reactjs.org"/>
      </header>
    </div>
  );
}

export default App;
