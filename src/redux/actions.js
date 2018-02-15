export function getDataAction(state, action) {
	var newState = Object.assign({}, state);
	var obj = action.data.data;
	newState.data = obj;
	return newState;
}

export function updateFieldAction(state, action) {
	var newState = Object.assign({}, state);
	var val = action.event;
	newState.input = val;
	return newState;
}

export function updateReadyAction(state, action) {
	var newState = Object.assign({}, state);
	newState.ready = action;
	return newState;
}
