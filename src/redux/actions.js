export const GET_DATA = 'GET_DATA';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export function getDataAction(state, action) {
	var newState = Object.assign({}, state);
	var obj = action.data.data;
	newState.data = obj;
    newState.ready = true;
	return newState;
}

export function updateFieldAction(state, action) {
	var newState = Object.assign({}, state);
	var val = action.event;
	newState.input = val;
	return newState;
}