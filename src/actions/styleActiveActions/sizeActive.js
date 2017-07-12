/*
 * Size Style Active Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/constans/styleActive';

// *** size *** //

function setActiveWidth(width) {
  return {
    type: types.SET_WIDTH,
    payload: { width }
  };
}

function setActiveHeight(height) {
  return {
    type: types.SET_HEIGHT,
    payload: { height }
  };
}

// *** margin *** //

function setActiveMarginTop(margin) {
  return {
    type: types.SET_MARGIN_TOP,
    payload: { margin }
  };
}

function setActiveMarginRight(margin) {
  return {
    type: types.SET_MARGIN_RIGHT,
    payload: { margin }
  };
}

function setActiveMarginBottom(margin) {
  return {
    type: types.SET_MARGIN_BOTTOM,
    payload: { margin }
  };
}

function setActiveMarginLeft(margin) {
  return {
    type: types.SET_MARGIN_LEFT,
    payload: { margin }
  };
}

// *** padding *** //

function setActivePaddingTop(padding) {
  return {
    type: types.SET_PADDING_TOP,
    payload: { padding }
  };
}

function setActivePaddingRight(padding) {
  return {
    type: types.SET_PADDING_RIGHT,
    payload: { padding }
  };
}

function setActivePaddingBottom(padding) {
  return {
    type: types.SET_PADDING_BOTTOM,
    payload: { padding }
  };
}

function setActivePaddingLeft(padding) {
  return {
    type: types.SET_PADDING_LEFT,
    payload: { padding }
  };
}

// *** transform *** //

function setActiveTransformOriginX(x) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_X,
    payload: {
      x
    }
  }
}

function setActiveTransformOriginY(y) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_Y,
    payload: {
      y
    }
  }
}

function setActiveTransformScaleX(x) {
  return {
    type: types.SET_TRANSFORM_SCALE_X,
    payload: {
      x
    }
  };
}

function setActiveTransformScaleY(y) {
  return {
    type: types.SET_TRANSFORM_SCALE_Y,
    payload: {
      y
    }
  };
}

function setActiveTransformSkewX(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_X,
    payload: { skew }
  };
}

function setActiveTransformSkewY(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_Y,
    payload: { skew }
  };
}

function setActiveTransformTranslateX(x) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_X,
    payload: {
      x
    }
  };
}

function setActiveTransformTranslateY(y) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_Y,
    payload: {
      y
    }
  };
}


function setActiveTransformRotate(rotate) {
  return {
    type: types.SET_TRANSFORM_ROTATE,
    payload: { rotate }
  };
}



function containerActions(dispath) {
  return bindActionCreators({
    setActiveWidth,
    setActiveHeight,

    setActiveMarginTop,
    setActiveMarginRight,
    setActiveMarginBottom,
    setActiveMarginLeft,

    setActivePaddingTop,
    setActivePaddingRight,
    setActivePaddingBottom,
    setActivePaddingLeft,

    setActiveTransformOriginX,
    setActiveTransformOriginY,
    setActiveTransformScaleX,
    setActiveTransformScaleY,
    setActiveTransformSkewY,
    setActiveTransformTranslateX,
    setActiveTransformTranslateY,
    setActiveTransformRotate
  }, dispath);
}

export {
  containerActions,

  setActiveWidth,
  setActiveHeight,

  setActiveMarginTop,
  setActiveMarginRight,
  setActiveMarginBottom,
  setActiveMarginLeft,

  setActivePaddingTop,
  setActivePaddingRight,
  setActivePaddingBottom,
  setActivePaddingLeft,

  setActiveTransformOriginX,
  setActiveTransformOriginY,
  setActiveTransformScaleX,
  setActiveTransformScaleY,
  setActiveTransformSkewX,
  setActiveTransformSkewY,
  setActiveTransformTranslateX,
  setActiveTransformTranslateY,
  setActiveTransformRotate
}
