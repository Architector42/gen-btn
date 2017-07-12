import { combineReducers } from 'redux';

import style from './style';
import styleHover from './styleHover';
import styleActive from './styleActive';

export default combineReducers({
  style,
  styleHover,
  styleActive
});
