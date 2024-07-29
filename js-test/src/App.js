import './App.css';
import CharCount from './JSPractice/CharCount'
import Palindrome from './JSPractice/Palindrome';
import RemoveDuplicate from './JSPractice/RemoveDuplicate';
import FetchData from './ReactPractice/FetchData';
import SortArray from './JSPractice/SortArray';
import LargestNo from './JSPractice/LargestNo';
import IncDec from './ReactPractice/IncDec';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <CharCount /> 
          <Palindrome />
          <RemoveDuplicate />
          <FetchData />
          <SortArray />
          <LargestNo />
          <IncDec />
        {/* </a> */}
      </header>
    </div>
  );
}

export default App;
