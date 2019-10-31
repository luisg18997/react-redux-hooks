import React from 'react';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Couter : {counter}</h1>
        <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>INCREMENT</button>
        <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>DECREMENT</button>
      </header>
    </div>
  );
}

export default App;
