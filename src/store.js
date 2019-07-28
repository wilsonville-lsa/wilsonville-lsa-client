import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';

export default createStore(
  reducer,
  compose(applyMiddleware(promiseMiddleware))
);
