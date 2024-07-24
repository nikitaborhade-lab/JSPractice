import './App.css';
import CharCount from './JSPractice/CharCount'
import Palindrome from './JSPractice/Palindrome';
import RemoveDuplicate from './JSPractice/RemoveDuplicate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <CharCount /> 
          <Palindrome />
          <RemoveDuplicate />
        </a>
      </header>
    </div>
  );
}

export default App;
