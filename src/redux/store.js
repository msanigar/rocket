/* eslint-disable no-use-before-define */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { GET_DATA, GOTO_SUB, UPDATE_FIELD } from './actions';

const mainReducer = (state = initialState, action) => {

	if (action.type === GET_DATA) {
		return getData(state, action);
	}

	if (action.type === GOTO_SUB) {
		return gotoSub(state, action);
	}

	if (action.type === UPDATE_FIELD) {
		return updateField(state, action);
	}

	return state;
};

function getData(state, action) {
	var newState = Object.assign({}, state);
	var obj = action.data.data;
	newState.data = obj;
    newState.ready = true;
	return newState;
}

function gotoSub(state, action) {
	var newState = Object.assign({}, state);
	var obj = action.data.data;
	newState.data = obj;
	return newState;
}

function updateField(state, action) {
	var newState = Object.assign({}, state);
	var val = action.event;
	newState.input = val;
	return newState;
}

const initialState = {
	data: {},
	ready: false,
	input: ''
};

let store;
const persistedState = loadState(initialState);

store = createStore(
	mainReducer,
	persistedState,
	compose(applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : val => val),
);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
