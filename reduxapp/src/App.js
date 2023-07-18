import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber); //to get the current state from the action
  const dispatch = useDispatch(); // using it to call the incNumber and decNumber actions
  return (
    <>
      <div class='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div class='quantity'>
          <a class='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
          <input name='quantity' type='text' class='quantity_input' value={myState} />
          <a class='quantity_plus' title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App