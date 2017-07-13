/*
 * Redusers
 */

import { combineReducers } from 'redux';
import button from './button';
import undoable from './undoable';

const buton = undoable(button);

export default combineReducers({
  buton
});
