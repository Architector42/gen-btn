/*
 * Meta Reducer
 */

import * as types from 'src/client/constans/buttonMeta';
import { set, setInArray, push, deleteInArray } from 'src/utils/pure';

const initialState = {
  className: '',
  buttonText: '',
  name: ''
};

function meta(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default meta;