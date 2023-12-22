import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';
import './index.css';
import reducer from './reducer'
import Counter from './components/Counter';
import * as actions from './actions';


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Counter
            counter={getState().value()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random() * 10);
                rnd(value);    
            }}
        />
      </React.StrictMode>
    );
}

update();
subscribe(update);




