/*
 * Text Style Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/style';

// *** fonts *** //

function setFont(font) {
  return {
    type: types.SET_FONT,
    payload: { font }
  };
}

function setFontSize(size) {
  return {
    type: types.SET_FONT_SIZE,
    payload: { size }
  };
}

function setFontStyle(style) {
  return {
    type: types.SET_FONT_STYLE,
    payload: { style }
  };
}

function setFontWeight(weight) {
  return {
    type: types.SET_FONT_WEIGHT,
    payload: { weight }
  };
}

function setTextTransform(transform) {
  return {
    type: types.SET_TEXT_TRANSFORM,
    payload: { transform }
  };
}

function setTextDecoration(decoration) {
  return {
    type: types.SET_TEXT_DECORATION,
    payload: { decoration }
  };
}

function setTextColor(color) {
  return {
    type: types.SET_TEXT_COLOR,
    payload: { color }
  }
}

function setTextAlign(align) {
  return {
    type: types.SET_TEXT_ALIGN,
    payload: { align }
  };
}

// *** shadows *** //

function addTextShadow(shadow) {
  return {
    type: types.ADD_TEXT_SHADOW,
    payload: { shadow }
  };
}

function deleteTextShadow(id) {
  return {
    type: types.DELETE_TEXT_SHADOW,
    payload: { id }
  };
}

function setTextShadowsDefault(shadowDefault) {
  return {
    type: types.SET_TEXT_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setTextShadowShiftX(x, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_X,
    payload: { id, x }
  };
}

function setTextShadowShiftY(y, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_Y,
    payload: { id, y }
  };
}

function setTextShadowBlur(blur, id) {
  return {
    type: types.SET_TEXT_SHADOW_BLUR,
    payload: { id, blur }
  };
}

function setTextShadowColor(color, id) {
  return {
    type: types.SET_TEXT_SHADOW_COLOR,
    payload: { id, color }
  };
}


function containerActions(dispath) {
  return bindActionCreators({
    setFont,
    setFontSize,
    setFontStyle,
    setFontWeight,
    setTextTransform,
    setTextDecoration,
    setTextColor,
    setTextAlign,

    addTextShadow,
    deleteTextShadow,

    setTextShadowsDefault,
    setTextShadowShiftX,
    setTextShadowShiftY,
    setTextShadowBlur,
    setTextShadowColor
  });
}

export {
  containerActions,

  setFont,
  setFontSize,
  setFontStyle,
  setFontWeight,
  setTextTransform,
  setTextDecoration,
  setTextColor,
  setTextAlign,

  addTextShadow,
  deleteTextShadow,

  setTextShadowsDefault,
  setTextShadowShiftX,
  setTextShadowShiftY,
  setTextShadowBlur,
  setTextShadowColor
}
