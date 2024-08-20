// import './App.css';
import CharCount from './JSPractice/CharCount'
import Palindrome from './JSPractice/Palindrome';
import RemoveDuplicate from './JSPractice/RemoveDuplicate';
import FetchData from './ReactPractice/FetchData';
import SortArray from './JSPractice/SortArray';
import LargestNo from './JSPractice/LargestNo';
import IncDec from './ReactPractice/IncDec';
import RouterTest from './ReactPractice/Router/RouterTest'
import Vowels from './JSPractice/Vowels';
import Factorial from './JSPractice/Factorial';
import Fibonacci from './JSPractice/Fibonacci';
import ChangeColor from './ReactPractice/ChangeColor'
import Counter from './ReactPractice/Counter';
import SortObject from './JSPractice/SortObject';
import EffectSample from './ReactPractice/Hooks/EffectSample';
import Parent from './ReactPractice/Parent';
import SmallAllCode from './JSPractice/SmallAllCode'
// import AsyncAwait from './JSPractice/AsyncAwait'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './ReduxCode/actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
          <CharCount /> 
          <Palindrome />
          <RemoveDuplicate />
          <FetchData />
          <SortArray />
          <LargestNo />
          <IncDec />
          <RouterTest />
          <Vowels />
          <Factorial />
          <Fibonacci />
          <ChangeColor />
          <Counter />
          <SortObject />
          <EffectSample />
          <Parent />
          <SmallAllCode />
          {/* <AsyncAwait /> */}

      <h4>Count Using Redux</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>-------------------------------------------------------------</div>
      </header>
    </div>
  );
}

export default App;
