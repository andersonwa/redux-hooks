import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import courses from './course';
import cart from './cart';

const store = createStore(combineReducers({
  courses: courses,
  cart: cart
}), applyMiddleware(thunk));

export default store;