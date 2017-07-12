import { createStore } from 'redux';

import reducer from './reducers';
import {
  setFont,
  setFontSize,
  setTextTransform,
  setFontWeight,
  addTextShadow,
  deleteTextShadow,
  setTextShadowShiftX,
  setTextShadowShiftY,
  setTextShadowBlur,
  setTextShadowColor
 } from './actions/textActions';

import {
  setMarginTop
} from './actions/sizeActions';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(setFont('Arial'));
store.dispatch(setFontSize('17px'));
store.dispatch(setTextTransform('uppercase'));
store.dispatch(setFontWeight('300'));
store.dispatch(addTextShadow({x: 0, y: 0, blur: 0, color: '#000'}));
store.dispatch(addTextShadow({x: 5, y: 5, blur: 0, color: '#000'}));
store.dispatch(addTextShadow({x: 0, y: 0, blur: 0, color: '#000'}));
store.dispatch(deleteTextShadow(1));
store.dispatch(addTextShadow({x: 0, y: 0, blur: 0, color: '#000'}));
store.dispatch(  setTextShadowShiftX('2px', 0) );
store.dispatch(  setTextShadowShiftY('3px', 0) );
store.dispatch(  setTextShadowBlur('12px', 3) );
store.dispatch(  setTextShadowColor('#343434', 0) );
store.dispatch(  setMarginTop('5px') );

console.log(store.getState());
