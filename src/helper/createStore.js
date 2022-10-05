import {createStore, applyMiddleware} from 'redux'; //createStore is used to create store and applymiddleware is used to hook up with any middleware in our application
import thunk from 'redux-thunk'; // thunk for async action creators
import axios from 'axios';
import reducers from '../client/reducers';
// create server store file
// it will be slightly diff than client
// it will need some way to detect initial data load

export default (req) => {

    const axiosInstance = axios.create({
      baseURL: 'http://react-ssr-api.herokuapp.com',
      headers: { cookie: req.get('cookie') || '' }
    });

    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    
    return store;
}