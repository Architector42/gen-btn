import { combineReducers } from 'redux';

import meta from './meta';
import style from './style';
import styleHover from './styleHover';
import styleActive from './styleActive';

export default combineReducers({
	meta,
  style,
  styleHover,
  styleActive
});
