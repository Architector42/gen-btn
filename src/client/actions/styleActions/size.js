/*
 * Size Style Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/style';

// *** size *** //

function setWidth(width) {
  return {
    type: types.SET_WIDTH,
    payload: { width }
  };
}

function setHeight(height) {
  return {
    type: types.SET_HEIGHT,
    payload: { height }
  };
}

// *** margin *** //

function setMarginTop(margin) {
  return {
    type: types.SET_MARGIN_TOP,
    payload: { margin }
  };
}

function setMarginRight(margin) {
  return {
    type: types.SET_MARGIN_RIGHT,
    payload: { margin }
  };
}

function setMarginBottom(margin) {
  return {
    type: types.SET_MARGIN_BOTTOM,
    payload: { margin }
  };
}

function setMarginLeft(margin) {
  return {
    type: types.SET_MARGIN_LEFT,
    payload: { margin }
  };
}

// *** padding *** //

function setPaddingTop(padding) {
  return {
    type: types.SET_PADDING_TOP,
    payload: { padding }
  };
}

function setPaddingRight(padding) {
  return {
    type: types.SET_PADDING_RIGHT,
    payload: { padding }
  };
}

function setPaddingBottom(padding) {
  return {
    type: types.SET_PADDING_BOTTOM,
    payload: { padding }
  };
}

function setPaddingLeft(padding) {
  return {
    type: types.SET_PADDING_LEFT,
    payload: { padding }
  };
}

// *** transform *** //

function setTransformOriginX(x) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_X,
    payload: {
      x
    }
  }
}

function setTransformOriginY(y) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_Y,
    payload: {
      y
    }
  }
}

function setTransformScaleX(x) {
  return {
    type: types.SET_TRANSFORM_SCALE_X,
    payload: {
      x
    }
  };
}

function setTransformScaleY(y) {
  return {
    type: types.SET_TRANSFORM_SCALE_Y,
    payload: {
      y
    }
  };
}

function setTransformSkewX(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_X,
    payload: { skew }
  };
}

function setTransformSkewY(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_Y,
    payload: { skew }
  };
}

function setTransformTranslateX(x) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_X,
    payload: {
      x
    }
  };
}

function setTransformTranslateY(y) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_Y,
    payload: {
      y
    }
  };
}


function setTransformRotate(rotate) {
  return {
    type: types.SET_TRANSFORM_ROTATE,
    payload: { rotate }
  };
}



function containerActions(dispath) {
  return bindActionCreators({
    setWidth,
    setHeight,

    setMarginTop,
    setMarginRight,
    setMarginBottom,
    setMarginLeft,

    setPaddingTop,
    setPaddingRight,
    setPaddingBottom,
    setPaddingLeft,

    setTransformOriginX,
    setTransformOriginY,
    setTransformScaleX,
    setTransformScaleY,
    setTransformSkewX,
    setTransformSkewY,
    setTransformTranslateX,
    setTransformTranslateY,
    setTransformRotate
  }, dispath);
}

export {
  containerActions,

  setWidth,
  setHeight,

  setMarginTop,
  setMarginRight,
  setMarginBottom,
  setMarginLeft,

  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,

  setTransformOriginX,
  setTransformOriginY,
  setTransformScaleX,
  setTransformScaleY,
  setTransformSkewX,
  setTransformSkewY,
  setTransformTranslateX,
  setTransformTranslateY,
  setTransformRotate
}
