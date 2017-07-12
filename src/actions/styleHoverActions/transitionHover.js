/*
 * Transition Style Hover Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/constans/styleHover';

// *** transition *** //

function setHoverTransitionProperty(property) {
  return {
    type: types.SET_TRANSITION_PROPERTY,
    payload: { property }
  };
}

function setHoverTransitionTimingFunction(timingFunction) {
  return {
    type: types.SET_TRANSITION_TIMING_FUNCTION,
    payload: { timingFunction }
  };
}

function setHoverTransitionDuration(duration) {
  return {
    type: types.SET_TRANSITION_DURATION,
    payload: { duration }
  };
}

function setHoverTransitionDelay(delay) {
  return {
    type: types.SET_TRANSITION_DELAY,
    payload: { delay }
  };
}

function containerActions(dispath) {
  return bindActionCreators({
    setHoverTransitionProperty,
    setHoverTransitionTimingFunction,
    setHoverTransitionDuration,
    setHoverTransitionDelay
  });
}

export {
  containerActions,

  setHoverTransitionProperty,
  setHoverTransitionTimingFunction,
  setHoverTransitionDuration,
  setHoverTransitionDelay
}
