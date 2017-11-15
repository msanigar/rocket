/* eslint-disable no-use-before-define */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { GET_DATA } from './actions';

const mainReducer = (state = initialState, action) => {

	if (action.type === GET_DATA) {
		return getData(state, action);
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

const initialState = {
	data: {},
	  ready: false,
	  version: 'lite'
};

let store;
const persistedState = loadState(initialState);

const storeArgs = [mainReducer, persistedState, compose(applyMiddleware(thunk))];

if(window.__REDUX_DEVTOOLS_EXTENSION__) {
	storeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

store = createStore(...storeArgs);

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
