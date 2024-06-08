import { createStore } from 'redux';
import rootReducer from './reducer.js';

/**
 * Redux store
 */
const store = createStore(rootReducer);
export default store;