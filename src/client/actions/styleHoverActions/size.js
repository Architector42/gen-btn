/*
 * Size Style Hover Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/styleHover';

// *** size *** //

function setHoverWidth(width) {
  return {
    type: types.SET_WIDTH,
    payload: { width }
  };
}

function setHoverHeight(height) {
  return {
    type: types.SET_HEIGHT,
    payload: { height }
  };
}

// *** margin *** //

function setHoverMarginTop(margin) {
  return {
    type: types.SET_MARGIN_TOP,
    payload: { margin }
  };
}

function setHoverMarginRight(margin) {
  return {
    type: types.SET_MARGIN_RIGHT,
    payload: { margin }
  };
}

function setHoverMarginBottom(margin) {
  return {
    type: types.SET_MARGIN_BOTTOM,
    payload: { margin }
  };
}

function setHoverMarginLeft(margin) {
  return {
    type: types.SET_MARGIN_LEFT,
    payload: { margin }
  };
}

// *** padding *** //

function setHoverPaddingTop(padding) {
  return {
    type: types.SET_PADDING_TOP,
    payload: { padding }
  };
}

function setHoverPaddingRight(padding) {
  return {
    type: types.SET_PADDING_RIGHT,
    payload: { padding }
  };
}

function setHoverPaddingBottom(padding) {
  return {
    type: types.SET_PADDING_BOTTOM,
    payload: { padding }
  };
}

function setHoverPaddingLeft(padding) {
  return {
    type: types.SET_PADDING_LEFT,
    payload: { padding }
  };
}

// *** transform *** //

function setHoverTransformOriginX(x) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_X,
    payload: {
      x
    }
  }
}

function setHoverTransformOriginY(y) {
  return {
    type: types.SET_TRANSFORM_ORIGIN_Y,
    payload: {
      y
    }
  }
}

function setHoverTransformScaleX(x) {
  return {
    type: types.SET_TRANSFORM_SCALE_X,
    payload: {
      x
    }
  };
}

function setHoverTransformScaleY(y) {
  return {
    type: types.SET_TRANSFORM_SCALE_Y,
    payload: {
      y
    }
  };
}

function setHoverTransformSkewX(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_X,
    payload: { skew }
  };
}

function setHoverTransformSkewY(skew) {
  return {
    type: types.SET_TRANSFORM_SKEW_Y,
    payload: { skew }
  };
}

function setHoverTransformTranslateX(x) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_X,
    payload: {
      x
    }
  };
}

function setHoverTransformTranslateY(y) {
  return {
    type: types.SET_TRANSFORM_TRANSLATE_Y,
    payload: {
      y
    }
  };
}


function setHoverTransformRotate(rotate) {
  return {
    type: types.SET_TRANSFORM_ROTATE,
    payload: { rotate }
  };
}



function containerActions(dispath) {
  return bindActionCreators({
    setHoverWidth,
    setHoverHeight,

    setHoverMarginTop,
    setHoverMarginRight,
    setHoverMarginBottom,
    setHoverMarginLeft,

    setHoverPaddingTop,
    setHoverPaddingRight,
    setHoverPaddingBottom,
    setHoverPaddingLeft,

    setHoverTransformOriginX,
    setHoverTransformOriginY,
    setHoverTransformScaleX,
    setHoverTransformScaleY,
    setHoverTransformSkewY,
    setHoverTransformTranslateX,
    setHoverTransformTranslateY,
    setHoverTransformRotate
  }, dispath);
}

export {
  containerActions,

  setHoverWidth,
  setHoverHeight,

  setHoverMarginTop,
  setHoverMarginRight,
  setHoverMarginBottom,
  setHoverMarginLeft,

  setHoverPaddingTop,
  setHoverPaddingRight,
  setHoverPaddingBottom,
  setHoverPaddingLeft,

  setHoverTransformOriginX,
  setHoverTransformOriginY,
  setHoverTransformScaleX,
  setHoverTransformScaleY,
  setHoverTransformSkewX,
  setHoverTransformSkewY,
  setHoverTransformTranslateX,
  setHoverTransformTranslateY,
  setHoverTransformRotate
}
