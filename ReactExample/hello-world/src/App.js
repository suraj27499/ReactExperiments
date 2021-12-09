import logo from './logo.svg';
import './App.css';
import { Example } from './Components/ExampleComponent';
import ClassComponent from './Components/ExampleClassComponent';
import { CountComponent } from './Components/CountComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi There !
          <Example name="suraj" lastname="kumar" />
          <ClassComponent name="suraj" lastname="kumar" />
          <CountComponent />

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
