/*
 * Transition Style Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/constans/style';

// *** transition *** //

function setTransitionProperty(property) {
  return {
    type: types.SET_TRANSITION_PROPERTY,
    payload: { property }
  };
}

function setTransitionTimingFunction(timingFunction) {
  return {
    type: types.SET_TRANSITION_TIMING_FUNCTION,
    payload: { timingFunction }
  };
}

function setTransitionDuration(duration) {
  return {
    type: types.SET_TRANSITION_DURATION,
    payload: { duration }
  };
}

function setTransitionDelay(delay) {
  return {
    type: types.SET_TRANSITION_DELAY,
    payload: { delay }
  };
}

function containerActions(dispath) {
  return bindActionCreators({
    setTransitionProperty,
    setTransitionTimingFunction,
    setTransitionDuration,
    setTransitionDelay
  });
}

export {
  containerActions,

  setTransitionProperty,
  setTransitionTimingFunction,
  setTransitionDuration,
  setTransitionDelay
}
