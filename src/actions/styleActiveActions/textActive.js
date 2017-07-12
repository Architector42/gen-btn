/*
 * Text Style Active Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/constans/styleActive';

// *** fonts *** //

function setActiveFontSize(size) {
  return {
    type: types.SET_FONT_SIZE,
    payload: { size }
  };
}

function setActiveFontWeight(weight) {
  return {
    type: types.SET_FONT_WEIGHT,
    payload: { weight }
  };
}

function setActiveTextTransform(transform) {
  return {
    type: types.SET_TEXT_TRANSFORM,
    payload: { transform }
  };
}

function setActiveTextDecoration(decoration) {
  return {
    type: types.SET_TEXT_DECORATION,
    payload: { decoration }
  };
}

function setActiveTextColor(color) {
  return {
    type: types.SET_TEXT_COLOR,
    payload: { color }
  }
}

// *** shadows *** //

function addActiveTextShadow(shadow) {
  return {
    type: types.ADD_TEXT_SHADOW,
    payload: { shadow }
  };
}

function deleteActiveTextShadow(id) {
  return {
    type: types.DELETE_TEXT_SHADOW,
    payload: { id }
  };
}

function setActiveTextShadowsDefault(shadowDefault) {
  return {
    type: types.SET_TEXT_SHADOW_DEFAULT,
    payload: { shadowDefault }
  };
}

function setActiveTextShadowShiftX(x, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_X,
    payload: { id, x }
  };
}

function setActiveTextShadowShiftY(y, id) {
  return {
    type: types.SET_TEXT_SHADOW_SHIFT_Y,
    payload: { id, y }
  };
}

function setActiveTextShadowBlur(blur, id) {
  return {
    type: types.SET_TEXT_SHADOW_BLUR,
    payload: { id, blur }
  };
}

function setActiveTextShadowColor(color, id) {
  return {
    type: types.SET_TEXT_SHADOW_COLOR,
    payload: { id, color }
  };
}


function containerActions(dispath) {
  return bindActionCreators({
    setActiveFontSize,
    setActiveFontWeight,
    setActiveTextTransform,
    setActiveTextDecoration,
    setActiveTextColor,

    addActiveTextShadow,
    deleteActiveTextShadow,

    setActiveTextShadowsDefault,
    setActiveTextShadowShiftX,
    setActiveTextShadowShiftY,
    setActiveTextShadowBlur,
    setActiveTextShadowColor
  });
}

export {
  containerActions,

  setActiveFont,
  setActiveFontSize,
  setActiveFontStyle,
  setActiveFontWeight,
  setActiveTextTransform,
  setActiveTextDecoration,
  setActiveTextColor,
  setActiveTextAlign,

  addActiveTextShadow,
  deleteActiveTextShadow,

  setActiveTextShadowsDefault,
  setActiveTextShadowShiftX,
  setActiveTextShadowShiftY,
  setActiveTextShadowBlur,
  setActiveTextShadowColor
}
