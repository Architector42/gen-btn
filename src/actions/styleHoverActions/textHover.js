/*
 * Text Style Hover Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/constans/styleHover';

// *** fonts *** //

function setHoverFontSize(size) {
  return {
    type: types.SET_FONT_SIZE,
    payload: { size }
  };
}

function setHoverFontWeight(weight) {
  return {
    type: types.SET_FONT_WEIGHT,
    payload: { weight }
  };
}

function setHoverTextTransform(transform) {
  return {
    type: types.SET_TEXT_TRANSFORM,
    payload: { transform }
  };
}

function setHoverTextDecoration(decoration) {
  return {
    type: types.SET_TEXT_DECORATION,
    payload: { decoration }
  };
}

function setHoverTextColor(color) {
  return {
    type: types.SET_TEXT_COLOR,
    payload: { color }
  }
}

// *** shadows *** //

function addHoverTextShadow(shadow) {
  return {
    type: types.ADD_TEXT_SHADOW,
    payload: { shadow }
  };
}

function deleteHoverTextShadow(id) {
  return {
    type: types.DELETE_TEXT_SHADOW,
    payload: { id }
  };
}

function setHoverTextShadowsDefault(shadowDefault) {
  return {
    type: types.SET_TEXT_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setHoverTextShadowShiftX(x, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_X,
    payload: { id, x }
  };
}

function setHoverTextShadowShiftY(y, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_Y,
    payload: { id, y }
  };
}

function setHoverTextShadowBlur(blur, id) {
  return {
    type: types.SET_TEXT_SHADOW_BLUR,
    payload: { id, blur }
  };
}

function setHoverTextShadowColor(color, id) {
  return {
    type: types.SET_TEXT_SHADOW_COLOR,
    payload: { id, color }
  };
}


function containerActions(dispath) {
  return bindActionCreators({
    setHoverFontSize,
    setHoverFontWeight,
    setHoverTextTransform,
    setHoverTextDecoration,
    setHoverTextColor,

    addHoverTextShadow,
    deleteHoverTextShadow,

    setHoverTextShadowsDefault,
    setHoverTextShadowShiftX,
    setHoverTextShadowShiftY,
    setHoverTextShadowBlur,
    setHoverTextShadowColor
  });
}

export {
  containerActions,

  setHoverFont,
  setHoverFontSize,
  setHoverFontStyle,
  setHoverFontWeight,
  setHoverTextTransform,
  setHoverTextDecoration,
  setHoverTextColor,
  setHoverTextAlign,

  addHoverTextShadow,
  deleteHoverTextShadow,

  setHoverTextShadowsDefault,
  setHoverTextShadowShiftX,
  setHoverTextShadowShiftY,
  setHoverTextShadowBlur,
  setHoverTextShadowColor
}
