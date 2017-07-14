/*
 * Background Style Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/style';

// *** background *** //

function setBtnColor(color) {
  return {
    type: types.SET_BTN_COLOR,
    payload: { color }
  };
}

function setBtnOpacity(opacity) {
  return {
    type: types.SET_BTN_OPACITY,
    payload: { opacity }
  };
}

// *** border *** //

function setBorderWidth(width) {
  return {
    type: types.SET_BORDER_WIDTH,
    payload: { width }
  };
}

function setBorderStyle(style) {
  return {
    type: types.SET_BORDER_STYLE,
    payload: { style }
  };
}

function setBorderColor(color) {
  return {
    type: types.SET_BORDER_COLOR,
    payload: { color }
  };
}

function setBorderTopWidth(width) {
  return {
    type: types.SET_BORDER_TOP_WIDTH,
    payload: { width }
  };
}

function setBorderTopStyle(style) {
  return {
    type: types.SET_BORDER_TOP_STYLE,
    payload: { style }
  };
}

function setBorderTopColor(color) {
  return {
    type: types.SET_BORDER_TOP_COLOR,
    payload: { color }
  };
}

function setBorderRightWidth(width) {
  return {
    type: types.SET_BORDER_RIGHT_WIDTH,
    payload: { width }
  };
}

function setBorderRightStyle(style) {
  return {
    type: types.SET_BORDER_RIGHT_STYLE,
    payload: { style }
  };
}

function setBorderRightColor(color) {
  return {
    type: types.SET_BORDER_RIGHT_COLOR,
    payload: { color }
  };
}

function setBorderBottomWidth(width) {
  return {
    type: types.SET_BORDER_BOTTOM_WIDTH,
    payload: { width }
  };
}

function setBorderBottomStyle(style) {
  return {
    type: types.SET_BORDER_BOTTOM_STYLE,
    payload: { style }
  };
}

function setBorderBottomColor(color) {
  return {
    type: types.SET_BORDER_BOTTOM_COLOR,
    payload: { color }
  };
}

function setBorderLeftWidth(width) {
  return {
    type: types.SET_BORDER_LEFT_WIDTH,
    payload: { width }
  };
}

function setBorderLeftStyle(style) {
  return {
    type: types.SET_BORDER_LEFT_STYLE,
    payload: { style }
  };
}

function setBorderLeftColor(color) {
  return {
    type: types.SET_BORDER_LEFT_COLOR,
    payload: { color }
  };
}

function setBorderRadius(radius) {
  return {
    type: types.SET_BORDER_RADIUS,
    payload: { radius }
  };
}

function setBorderTopLeftRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_LEFT_RADIUS,
    payload: { radius }
  };
}

function setBorderTopRightRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_RIGHT_RADIUS,
    payload: { radius }
  };
}

function setBorderBottomLeftRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_LEFT_RADIUS,
    payload: { radius }
  };
}

function setBorderBottomRightRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_RIGHT_RADIUS,
    payload: { radius }
  };
}

// *** shadow *** //

function addShadow(shadow) {
  return {
    type: types.ADD_SHADOW,
    payload: { shadow }
  };
}

function deleteShadow(id) {
  return {
    type: types.DELETE_SHADOW,
    payload: { id }
  };
}

function setShadowDefault(shadowDefault) {
  return {
    type: types.SET_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setShadowInset(inset, id) {
  return {
    type: types.SET_SHADOW_INSET,
    payload: { inset, id }
  };
}

function setShadowShiftX(x, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { x }
  };
}

function setShadowShiftY(y, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { y, id }
  };
}

function setShadowBlur(blur, id) {
  return {
    type: types.SET_SHADOW_BLUR,
    payload: { blur, id }
  };
}

function setShadowStretching(stretching, id) {
  return {
    type: types.SET_SHADOW_STRETCHING,
    payload: { stretching, id }
  };
}

function setShadowColor(color, id) {
  return {
    type: types.SET_SHADOW_COLOR,
    payload: { color, id }
  };
}

function containerActions(dispath) {
  return bindActionCreators({
    setBtnColor,
    setBtnOpacity,

    setBorderWidth,
    setBorderStyle,
    setBorderColor,
    setBorderTopWidth,
    setBorderTopStyle,
    setBorderTopColor,
    setBorderRightWidth,
    setBorderRightStyle,
    setBorderRightColor,
    setBorderBottomWidth,
    setBorderBottomStyle,
    setBorderBottomColor,
    setBorderLeftWidth,
    setBorderLeftStyle,
    setBorderLeftColor,
    setBorderRadius,
    setBorderTopLeftRadius,
    setBorderTopRightRadius,
    setBorderBottomLeftRadius,
    setBorderBottomRightRadius,

    addShadow,
    deleteShadow,
    setShadowDefault,
    setShadowInset,
    setShadowShiftX,
    setShadowShiftY,
    setShadowBlur,
    setShadowStretching,
    setShadowColor
  });
}

export {
  containerActions,

  setBtnColor,
  setBtnOpacity,

  setBorderWidth,
  setBorderStyle,
  setBorderColor,
  setBorderTopWidth,
  setBorderTopStyle,
  setBorderTopColor,
  setBorderRightWidth,
  setBorderRightStyle,
  setBorderRightColor,
  setBorderBottomWidth,
  setBorderBottomStyle,
  setBorderBottomColor,
  setBorderLeftWidth,
  setBorderLeftStyle,
  setBorderLeftColor,
  setBorderRadius,
  setBorderTopLeftRadius,
  setBorderTopRightRadius,
  setBorderBottomLeftRadius,
  setBorderBottomRightRadius,

  addShadow,
  deleteShadow,
  setShadowDefault,
  setShadowInset,
  setShadowShiftX,
  setShadowShiftY,
  setShadowBlur,
  setShadowStretching,
  setShadowColor
}
