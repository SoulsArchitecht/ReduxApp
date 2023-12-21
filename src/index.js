import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import './index.css';

const initState = {value: 0}

const reducer1 = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return state * action.payload;
    default:
      return state;
  }
}

// for Object case
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      }
    case "DEC":
      return {
        ...state,
        value: state.value - 1
      }
    case "RND":
      return {
        ...state,
        value: state.value * action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

// const update = () => {
//   document.getElementById('counter').textContent = store.getState();
// }

// for Object case:
const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

//фун-ия action creator:
// const inc = () => {
//   return{
//     type: 'INC'
//   }
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
})

//let state = reducer(initState, {type: 'INC'});
//console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    </>
  </React.StrictMode>
);


