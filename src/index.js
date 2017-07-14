import { createStore } from 'redux';

import reducer from './client/reducers';

import {
  setMarginTop
} from './client/actions/sizeActions';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());
