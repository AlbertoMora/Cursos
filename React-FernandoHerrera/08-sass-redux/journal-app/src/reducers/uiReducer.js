import { types } from "../types/types";

const initialState = {
    loading: false,
    msgErr: null,
};
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            };
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            };
        case types.uiSetError:
            return {
                ...state,
                msgErr: action.payload,
            };
        case types.uiRemoveError:
            return {
                ...state,
                msgErr: null,
            };
        default:
            return state;
    }
};
