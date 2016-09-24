import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducers);
