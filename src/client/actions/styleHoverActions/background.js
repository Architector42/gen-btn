/*
 * Background Style Hover Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/styleHover';

// *** background *** //

function setHoverBtnColor(color) {
  return {
    type: types.SET_BTN_COLOR,
    payload: { color }
  };
}

function setHoverBtnOpacity(opacity) {
  return {
    type: types.SET_BTN_OPACITY,
    payload: { opacity }
  };
}

// *** border *** //

function setHoverBorderWidth(width) {
  return {
    type: types.SET_BORDER_WIDTH,
    payload: { width }
  };
}

function setHoverBorderStyle(style) {
  return {
    type: types.SET_BORDER_STYLE,
    payload: { style }
  };
}

function setHoverBorderColor(color) {
  return {
    type: types.SET_BORDER_COLOR,
    payload: { color }
  };
}

function setHoverBorderTopWidth(width) {
  return {
    type: types.SET_BORDER_TOP_WIDTH,
    payload: { width }
  };
}

function setHoverBorderTopStyle(style) {
  return {
    type: types.SET_BORDER_TOP_STYLE,
    payload: { style }
  };
}

function setHoverBorderTopColor(color) {
  return {
    type: types.SET_BORDER_TOP_COLOR,
    payload: { color }
  };
}

function setHoverBorderRightWidth(width) {
  return {
    type: types.SET_BORDER_RIGHT_WIDTH,
    payload: { width }
  };
}

function setHoverBorderRightStyle(style) {
  return {
    type: types.SET_BORDER_RIGHT_STYLE,
    payload: { style }
  };
}

function setHoverBorderRightColor(color) {
  return {
    type: types.SET_BORDER_RIGHT_COLOR,
    payload: { color }
  };
}

function setHoverBorderBottomWidth(width) {
  return {
    type: types.SET_BORDER_BOTTOM_WIDTH,
    payload: { width }
  };
}

function setHoverBorderBottomStyle(style) {
  return {
    type: types.SET_BORDER_BOTTOM_STYLE,
    payload: { style }
  };
}

function setHoverBorderBottomColor(color) {
  return {
    type: types.SET_BORDER_BOTTOM_COLOR,
    payload: { color }
  };
}

function setHoverBorderLeftWidth(width) {
  return {
    type: types.SET_BORDER_LEFT_WIDTH,
    payload: { width }
  };
}

function setHoverBorderLeftStyle(style) {
  return {
    type: types.SET_BORDER_LEFT_STYLE,
    payload: { style }
  };
}

function setHoverBorderLeftColor(color) {
  return {
    type: types.SET_BORDER_LEFT_COLOR,
    payload: { color }
  };
}

function setHoverBorderRadius(radius) {
  return {
    type: types.SET_BORDER_RADIUS,
    payload: { radius }
  };
}

function setHoverBorderTopLeftRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_LEFT_RADIUS,
    payload: { radius }
  };
}

function setHoverBorderTopRightRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_RIGHT_RADIUS,
    payload: { radius }
  };
}

function setHoverBorderBottomLeftRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_LEFT_RADIUS,
    payload: { radius }
  };
}

function setHoverBorderBottomRightRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_RIGHT_RADIUS,
    payload: { radius }
  };
}

// *** shadow *** //

function addHoverShadow(shadow) {
  return {
    type: types.ADD_SHADOW,
    payload: { shadow }
  };
}

function deleteHoverShadow(id) {
  return {
    type: types.DELETE_SHADOW,
    payload: { id }
  };
}

function setHoverShadowDefault(shadowDefault) {
  return {
    type: types.SET_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setHoverShadowInset(inset, id) {
  return {
    type: types.SET_SHADOW_INSET,
    payload: { inset, id }
  };
}

function setHoverShadowShiftX(x, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { x }
  };
}

function setHoverShadowShiftY(y, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { y, id }
  };
}

function setHoverShadowBlur(blur, id) {
  return {
    type: types.SET_SHADOW_BLUR,
    payload: { blur, id }
  };
}

function setHoverShadowStretching(stretching, id) {
  return {
    type: types.SET_SHADOW_STRETCHING,
    payload: { stretching, id }
  };
}

function setHoverShadowColor(color, id) {
  return {
    type: types.SET_SHADOW_COLOR,
    payload: { color, id }
  };
}

function containerActions(dispath) {
  return bindActionCreators({
    setHoverBtnColor,
    setHoverBtnOpacity,

    setHoverBorderWidth,
    setHoverBorderStyle,
    setHoverBorderColor,
    setHoverBorderTopWidth,
    setHoverBorderTopStyle,
    setHoverBorderTopColor,
    setHoverBorderRightWidth,
    setHoverBorderRightStyle,
    setHoverBorderRightColor,
    setHoverBorderBottomWidth,
    setHoverBorderBottomStyle,
    setHoverBorderBottomColor,
    setHoverBorderLeftWidth,
    setHoverBorderLeftStyle,
    setHoverBorderLeftColor,
    setHoverBorderRadius,
    setHoverBorderTopLeftRadius,
    setHoverBorderTopRightRadius,
    setHoverBorderBottomLeftRadius,
    setHoverBorderBottomRightRadius,

    addHoverShadow,
    deleteHoverShadow,
    setHoverShadowDefault,
    setHoverShadowInset,
    setHoverShadowShiftX,
    setHoverShadowShiftY,
    setHoverShadowBlur,
    setHoverShadowStretching,
    setHoverShadowColor
  });
}

export {
  containerActions,

  setBtnColor,
  setBtnOpacity,

  setHoverBorderWidth,
  setHoverBorderStyle,
  setHoverBorderColor,
  setHoverBorderTopWidth,
  setHoverBorderTopStyle,
  setHoverBorderTopColor,
  setHoverBorderRightWidth,
  setHoverBorderRightStyle,
  setHoverBorderRightColor,
  setHoverBorderBottomWidth,
  setHoverBorderBottomStyle,
  setHoverBorderBottomColor,
  setHoverBorderLeftWidth,
  setHoverBorderLeftStyle,
  setHoverBorderLeftColor,
  setHoverBorderRadius,
  setHoverBorderTopLeftRadius,
  setHoverBorderTopRightRadius,
  setHoverBorderBottomLeftRadius,
  setHoverBorderBottomRightRadius,

  addHoverShadow,
  deleteHoverShadow,
  setHoverShadowDefault,
  setHoverShadowInset,
  setHoverShadowShiftX,
  setHoverShadowShiftY,
  setHoverShadowBlur,
  setHoverShadowStretching,
  setHoverShadowColor
}
