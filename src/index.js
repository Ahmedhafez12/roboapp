import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
// import lucas from './lucas.js';
//import RoboticParent from './RoboticParent.js';
//import { robots } from './robots'; 
import { searchRobots } from './reducer';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const logger = createLogger(); 
const store = createStore(searchRobots, applyMiddleware(logger) ); 



ReactDOM.render(
	<Provider store={store}>
    	<App/>
    </Provider>
    ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
