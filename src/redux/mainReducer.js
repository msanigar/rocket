import { GET_DATA, UPDATE_FIELD, getDataAction, updateFieldAction } from "./actions";

const mainReducer = (state = initialState, action) => {
    
    if (action.type === GET_DATA) {
        return getDataAction(state, action);
    }

    if (action.type === UPDATE_FIELD) {
        return updateFieldAction(state, action);
    }

    return state;
};

export default mainReducer;