import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import mainReducer from './mainReducer.js';

const initialState = {
	data: {},
	ready: false,
	input: '',
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
