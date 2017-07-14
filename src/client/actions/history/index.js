/*
 * History Actions Creators
 */

import { bindActionCreators } from 'redux';
import * as types from 'src/client/constans/history';

function undo() {
	return { type: types.UNDO };
}

function redo() {
	return { type: types.REDO };
}

function containerActions(dispatch) {
	return bindActionCreators({
		undo,
		redo
	});
}

export {
	containerActions,

	undo,
	redo
}