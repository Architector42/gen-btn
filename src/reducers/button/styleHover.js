import * as types from 'src/constans/styleHover';
import { set, setInArray, push, deleteInArray } from 'src/utils/pure';

const initialState = {
  fontSize: '16px',
  fontWeight: '',
  textTransform: '',
  textDecoration: '',
  color: '#333333',

  textShadow: [],

  width: '',
  height: '',

  margin: { top: '', right: '', bottom: '', left: '' },
  padding: { top: '', right: '', bottom: '', left: '' },

  transformOrigin: {x: '', y: ''},
  transform: [],

  background: '',
  opacity: '',

  border: {},
  borderTop: {},
  borderRight: {},
  borderBottom: {},
  borderLeft: {},
  borderRadius: '',
  borderTopLeftRadius: '',
  borderTopRightRadius: '',
  borderBottomLeftRadius: '',
  borderBottomRightRadius: '',

  shadow: [],
};

function styleHover(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default styleHover;
