import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);
