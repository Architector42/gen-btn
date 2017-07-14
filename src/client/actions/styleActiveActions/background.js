/*
 * Background Style Active Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/styleActive';

// *** background *** //

function setActiveBtnColor(color) {
  return {
    type: types.SET_BTN_COLOR,
    payload: { color }
  };
}

function setActiveBtnOpacity(opacity) {
  return {
    type: types.SET_BTN_OPACITY,
    payload: { opacity }
  };
}

// *** border *** //

function setActiveBorderWidth(width) {
  return {
    type: types.SET_BORDER_WIDTH,
    payload: { width }
  };
}

function setActiveBorderStyle(style) {
  return {
    type: types.SET_BORDER_STYLE,
    payload: { style }
  };
}

function setActiveBorderColor(color) {
  return {
    type: types.SET_BORDER_COLOR,
    payload: { color }
  };
}

function setActiveBorderTopWidth(width) {
  return {
    type: types.SET_BORDER_TOP_WIDTH,
    payload: { width }
  };
}

function setActiveBorderTopStyle(style) {
  return {
    type: types.SET_BORDER_TOP_STYLE,
    payload: { style }
  };
}

function setActiveBorderTopColor(color) {
  return {
    type: types.SET_BORDER_TOP_COLOR,
    payload: { color }
  };
}

function setActiveBorderRightWidth(width) {
  return {
    type: types.SET_BORDER_RIGHT_WIDTH,
    payload: { width }
  };
}

function setActiveBorderRightStyle(style) {
  return {
    type: types.SET_BORDER_RIGHT_STYLE,
    payload: { style }
  };
}

function setActiveBorderRightColor(color) {
  return {
    type: types.SET_BORDER_RIGHT_COLOR,
    payload: { color }
  };
}

function setActiveBorderBottomWidth(width) {
  return {
    type: types.SET_BORDER_BOTTOM_WIDTH,
    payload: { width }
  };
}

function setActiveBorderBottomStyle(style) {
  return {
    type: types.SET_BORDER_BOTTOM_STYLE,
    payload: { style }
  };
}

function setActiveBorderBottomColor(color) {
  return {
    type: types.SET_BORDER_BOTTOM_COLOR,
    payload: { color }
  };
}

function setActiveBorderLeftWidth(width) {
  return {
    type: types.SET_BORDER_LEFT_WIDTH,
    payload: { width }
  };
}

function setActiveBorderLeftStyle(style) {
  return {
    type: types.SET_BORDER_LEFT_STYLE,
    payload: { style }
  };
}

function setActiveBorderLeftColor(color) {
  return {
    type: types.SET_BORDER_LEFT_COLOR,
    payload: { color }
  };
}

function setActiveBorderRadius(radius) {
  return {
    type: types.SET_BORDER_RADIUS,
    payload: { radius }
  };
}

function setActiveBorderTopLeftRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_LEFT_RADIUS,
    payload: { radius }
  };
}

function setActiveBorderTopRightRadius(radius) {
  return {
    type: types.SET_BORDER_TOP_RIGHT_RADIUS,
    payload: { radius }
  };
}

function setActiveBorderBottomLeftRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_LEFT_RADIUS,
    payload: { radius }
  };
}

function setActiveBorderBottomRightRadius(radius) {
  return {
    type: types.SET_BORDER_BOTTOM_RIGHT_RADIUS,
    payload: { radius }
  };
}

// *** shadow *** //

function addActiveShadow(shadow) {
  return {
    type: types.ADD_SHADOW,
    payload: { shadow }
  };
}

function deleteActiveShadow(id) {
  return {
    type: types.DELETE_SHADOW,
    payload: { id }
  };
}

function setActiveShadowDefault(shadowDefault) {
  return {
    type: types.SET_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setActiveShadowInset(inset, id) {
  return {
    type: types.SET_SHADOW_INSET,
    payload: { inset, id }
  };
}

function setActiveShadowShiftX(x, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { x }
  };
}

function setActiveShadowShiftY(y, id) {
  return {
    type: types.SET_SHADOW_SHIFT_X,
    payload: { y, id }
  };
}

function setActiveShadowBlur(blur, id) {
  return {
    type: types.SET_SHADOW_BLUR,
    payload: { blur, id }
  };
}

function setActiveShadowStretching(stretching, id) {
  return {
    type: types.SET_SHADOW_STRETCHING,
    payload: { stretching, id }
  };
}

function setActiveShadowColor(color, id) {
  return {
    type: types.SET_SHADOW_COLOR,
    payload: { color, id }
  };
}

function containerActions(dispath) {
  return bindActionCreators({
    setActiveBtnColor,
    setActiveBtnOpacity,

    setActiveBorderWidth,
    setActiveBorderStyle,
    setActiveBorderColor,
    setActiveBorderTopWidth,
    setActiveBorderTopStyle,
    setActiveBorderTopColor,
    setActiveBorderRightWidth,
    setActiveBorderRightStyle,
    setActiveBorderRightColor,
    setActiveBorderBottomWidth,
    setActiveBorderBottomStyle,
    setActiveBorderBottomColor,
    setActiveBorderLeftWidth,
    setActiveBorderLeftStyle,
    setActiveBorderLeftColor,
    setActiveBorderRadius,
    setActiveBorderTopLeftRadius,
    setActiveBorderTopRightRadius,
    setActiveBorderBottomLeftRadius,
    setActiveBorderBottomRightRadius,

    addActiveShadow,
    deleteActiveShadow,
    setActiveShadowDefault,
    setActiveShadowInset,
    setActiveShadowShiftX,
    setActiveShadowShiftY,
    setActiveShadowBlur,
    setActiveShadowStretching,
    setActiveShadowColor
  });
}

export {
  containerActions,

  setBtnColor,
  setBtnOpacity,

  setActiveBorderWidth,
  setActiveBorderStyle,
  setActiveBorderColor,
  setActiveBorderTopWidth,
  setActiveBorderTopStyle,
  setActiveBorderTopColor,
  setActiveBorderRightWidth,
  setActiveBorderRightStyle,
  setActiveBorderRightColor,
  setActiveBorderBottomWidth,
  setActiveBorderBottomStyle,
  setActiveBorderBottomColor,
  setActiveBorderLeftWidth,
  setActiveBorderLeftStyle,
  setActiveBorderLeftColor,
  setActiveBorderRadius,
  setActiveBorderTopLeftRadius,
  setActiveBorderTopRightRadius,
  setActiveBorderBottomLeftRadius,
  setActiveBorderBottomRightRadius,

  addActiveShadow,
  deleteActiveShadow,
  setActiveShadowDefault,
  setActiveShadowInset,
  setActiveShadowShiftX,
  setActiveShadowShiftY,
  setActiveShadowBlur,
  setActiveShadowStretching,
  setActiveShadowColor
}
