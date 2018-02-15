import { getDataAction, updateFieldAction, updateReadyAction } from "./actions";
import { GET_DATA, UPDATE_FIELD, UPDATE_READY } from "./actionTypes";

const mainReducer = (state = initialState, action) => {

    if (action.type === GET_DATA) {
        return getDataAction(state, action);
    }

    if (action.type === UPDATE_FIELD) {
        return updateFieldAction(state, action);
    }

    if (action.type === UPDATE_READY) {
        return updateReadyAction(state, action.event);
    }

    return state;
};

export default mainReducer;
