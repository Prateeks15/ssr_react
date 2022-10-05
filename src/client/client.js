// Startig point o client side app

//BOOTUP LOCATION OF APP IN OUR BROWSER

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes  } from "react-router-config";
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom'; // used for routing
import {createStore, applyMiddleware} from 'redux'; //createStore is used to create store and applymiddleware is used to hook up with any middleware in our application
import thunk from 'redux-thunk'; // thunk for async action creators
import axios from 'axios';
import {Provider} from 'react-redux'; //provides the store to all the connected components in our application
import reducers from './reducers';

//creating custom axios or handling aunthenication at client 
const axiosInstance = axios.create({
 baseURL: '/api'
});


// store for client side app
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));   //using window.INITIAL_STATE for ssolvig client rehydration problem in video 56


//below content wil run on client side
// we are calling reactdom.render to tell react we are not replacing html made by ssr we are telling react to go back trough and setup 
//all necessary event handlers and code to be executed.

ReactDOM.hydrate(
    //anytime reduxstore changes it will alert the connection componets
  <Provider store={store}>
    <BrowserRouter>
    <div>
      {renderRoutes(Routes)}
    </div>      
    </BrowserRouter>
  </Provider>, 
    document.querySelector('#root')); //second argument is this div with id root in our index.js server file it will attempt to render our react app into it.