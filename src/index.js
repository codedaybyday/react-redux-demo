import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reactRedux from './react-redux';
import redux from './redux';
import reducer from './reducer';
import anotherReducer from './anotherReducer';
const {createStore, combineReducers} = redux;
const {Provider} = reactRedux;
const combinedReducers = combineReducers({
    reducer,
    anotherReducer
});
console.log(combinedReducers);
let store = createStore(combinedReducers);
console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
