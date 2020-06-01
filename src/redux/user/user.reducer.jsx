import useractionTypes from './user.types';
const INITIAL_STATE = {
    currentUser: null,
    error: null    
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case useractionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case useractionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error:null
            }
        case useractionTypes.SIGN_IN_FAILURE:
        case useractionTypes.SIGN_OUT_FAILURE:
        case useractionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error : action.payload
            }

        default:
            return state;
    }
};

export default userReducer;