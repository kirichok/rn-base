import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './modules';

export default createStore(rootReducer, applyMiddleware(thunk, promiseMiddleware()));