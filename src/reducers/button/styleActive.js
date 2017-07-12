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

function styleActive(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default styleActive;
