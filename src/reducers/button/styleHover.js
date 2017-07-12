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
    // *** fonts *** //

    case types.SET_FONT_SIZE:
      return set(state, 'fontSize', action.payload.size);

    case types.SET_FONT_WEIGHT:
      return set(state, 'fontWeight', action.payload.weight);

    case types.SET_TEXT_TRANSFORM:
      return set(state, 'textTransform', action.payload.transform);

    case types.SET_TEXT_DECORATION:
      return set(state, 'textDecoration', action.payload.decoration);

    case types.SET_TEXT_COLOR:
      return set(state, 'color', action.payload.color);

    // *** fonts shadows *** //

    case types.ADD_TEXT_SHADOW:
      return push(state, 'textShadow', action.payload.shadow);

    case types.DELETE_TEXT_SHADOW:
      return deleteInArray(state, 'textShadow', action.payload.id);

    case types.SET_TEXT_SHADOW_DEFAULT:
      return set(state, 'textShadow', action.payload.shadowDefault);

    case types.SET_TEXT_SHADOW_SHIFT_X:
      return setInArray(state, 'textShadow', {
        prop: 'x',
        value: action.payload.x,
        id: action.payload.id
      });

    case types.SET_TEXT_SHADOW_SHIFT_Y:
      return setInArray(state, 'textShadow', {
        prop: 'y',
        value: action.payload.y,
        id: action.payload.id
      });

    case types.SET_TEXT_SHADOW_BLUR:
      return setInArray(state, 'textShadow', {
        prop: 'blur',
        value: action.payload.blur,
        id: action.payload.id
      });

    case types.SET_TEXT_SHADOW_COLOR:
      return setInArray(state, 'textShadow', {
        prop: 'color',
        value: action.payload.color,
        id: action.payload.id
      });

    // *** size *** //

    case types.SET_WIDTH:
      return set(state, 'width', action.payload.width);

    case types.SET_HEIGHT:
      return set(state, 'height', action.payload.height);

    // *** margin *** //

    case types.SET_MARGIN_TOP:
      return set(state, 'margin.top', action.payload.margin);

    case types.SET_MARGIN_RIGHT:
      return set(state, 'margin.right', action.payload.margin);

    case types.SET_MARGIN_BOTTOM:
      return set(state, 'margin.bottom', action.payload.margin);

    case types.SET_MARGIN_LEFT:
      return set(state, 'margin.left', action.payload.margin);

    // *** padding *** //

    case types.SET_PADDING_TOP:
      return set(state, 'padding.top', action.payload.padding);

    case types.SET_PADDING_RIGHT:
      return set(state, 'padding.right', action.payload.padding);

    case types.SET_PADDING_BOTTOM:
      return set(state, 'padding.bottom', action.payload.padding);

    case types.SET_PADDING_LEFT:
      return set(state, 'padding.left', action.payload.padding);

     // *** transform *** //

    case types.SET_TRANSFORM_ORIGIN_X:
      return set(state, 'transformOrigin.x', action.payload.x);

    case types.SET_TRANSFORM_ORIGIN_Y:
      return set(state, 'transformOrigin.x', action.payload.x);

    case types.SET_TRANSFORM_SCALE_X:
      return set(state, 'transform.scale.x', action.payload.x);

    case types.SET_TRANSFORM_SCALE_Y:
      return set(state, 'transform.scale.y', action.payload.y);

    case types.SET_TRANSFORM_SKEW_X:
      return set(state, 'transform.skew.x', action.payload.x);

    case types.SET_TRANSFORM_SKEW_Y:
      return set(state, 'transform.skew.y', action.payload.y);

    case types.SET_TRANSFORM_TRANSLATE_X:
      return set(state, 'transform.translate.y', action.payload.y);

    case types.SET_TRANSFORM_TRANSLATE_Y:
      return set(state, 'transform.translate.y', action.payload.y);

    case types.SET_TRANSFORM_ROTATE:
      return set(state, 'transform.rotate', action.payload.rotate);

    // *** background *** //

    case types.SET_BTN_COLOR:
      return set(state, 'background', action.payload.color);

    case types.SET_BTN_OPACITY:
      return set(state, 'opacity', action.payload.opacity);

    // *** border *** //

    case types.SET_BORDER_WIDTH:
      return set(state, 'border.width', action.payload.width);

    case types.SET_BORDER_STYLE:
      return set(state, 'border.style', action.payload.style);

    case types.SET_BORDER_COLOR:
      return set(state, 'border.color', action.payload.color);

    case types.SET_BORDER_TOP_WIDTH:
      return set(state, 'borderTop.width', action.payload.width);

    case types.SET_BORDER_TOP_STYLE:
      return set(state, 'borderTop.style', action.payload.style);

    case types.SET_BORDER_TOP_COLOR:
      return set(state, 'borderTop.color', action.payload.color);

    case types.SET_BORDER_RIGHT_WIDTH:
      return set(state, 'borderRight.width', action.payload.width);

    case types.SET_BORDER_RIGHT_STYLE:
      return set(state, 'borderRight.style', action.payload.style);

    case types.SET_BORDER_RIGHT_COLOR:
      return set(state, 'borderRight.color', action.payload.color);

    case types.SET_BORDER_BOTTOM_WIDTH:
      return set(state, 'borderBottom.width', action.payload.width);

    case types.SET_BORDER_BOTTOM_STYLE:
      return set(state, 'borderBottom.style', action.payload.style);

    case types.SET_BORDER_BOTTOM_COLOR:
      return set(state, 'borderBottom.color', action.payload.color);

    case types.SET_BORDER_LEFT_WIDTH:
      return set(state, 'borderLeft.width', action.payload.width);

    case types.SET_BORDER_LEFT_STYLE:
      return set(state, 'borderLeft.style', action.payload.style);

    case types.SET_BORDER_LEFT_COLOR:
      return set(state, 'borderLeft.color', action.payload.color);

    case types.SET_BORDER_RADIUS:
      return set(state, 'borderRadius', action.payload.radius);

    case types.SET_BORDER_TOP_LEFT_RADIUS:
      return set(state, 'borderTopLeftRadius', action.payload.radius);

    case types.SET_BORDER_TOP_RIGHT_RADIUS:
      return set(state, 'borderTopRightRadius', action.payload.radius);

    case types.SET_BORDER_BOTTOM_LEFT_RADIUS:
      return set(state, 'borderBottomLeftRadius', action.payload.radius);

    case types.SET_BORDER_BOTTOM_RIGHT_RADIUS:
      return set(state, 'borderBottomRightRadius', action.payload.radius);

    // *** shadow *** //

    case types.ADD_SHADOW:
      return push(state, 'shadow', action.payload.shadow);

    case types.DELETE_SHADOW:
      return deleteInArray(state, 'shadow', action.payload.id);

    case types.SET_SHADOW_DEFAULT:
      return set(state, 'shadow', action.payload.shadowDefault);

    case types.SET_SHADOW_INSET:
      return setInArray(state, 'shadow', {
        prop: 'inset',
        value: action.payload.inset,
        id: action.payload.id
      });

    case types.SET_SHADOW_SHIFT_X:
      return setInArray(state, 'shadow', {
        prop: 'shiftX',
        value: action.payload.x,
        id: action.payload.id
      });

    case types.SET_SHADOW_SHIFT_Y:
      return setInArray(state, 'shadow', {
        prop: 'shiftY',
        value: action.payload.y,
        id: action.payload.id
      });

    case types.SET_SHADOW_BLUR:
      return setInArray(state, 'shadow', {
        prop: 'blur',
        value: action.payload.blur,
        id: action.payload.id
      });

    case types.SET_SHADOW_STRETCHING:
      return setInArray(state, 'shadow', {
        prop: 'stretching',
        value: action.payload.stretching,
        id: action.payload.id
      });

    case types.SET_SHADOW_COLOR:
      return setInArray(state, 'shadow', {
        prop: 'color',
        value: action.payload.color,
        id: action.payload.id
      });

    default:
      return state;
  }
}

export default styleHover;
