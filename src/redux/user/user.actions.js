import useractionTypes from './user.types';

export const setCurrentUser = user => (
    {
        type: useractionTypes.SET_CURRENT_USER,
        payload :user
    }
);

export const googleSignInStart = () =>({
    type: useractionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user =>(
    {
        type: useractionTypes.SIGN_IN_SUCCESS,
        payload:user
    }
);

export const signInFailure = error => (
    {
        type: useractionTypes.SIGN_IN_FAILURE,
        payload:error
    }
);

export const emailSignInStart = usernameAndPassword =>({
    type: useractionTypes.EMAIL_SIGN_IN_START,
    payload: usernameAndPassword
});

export const checkUserSession = () => ({
    type:useractionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type:useractionTypes.SIGN_OUT_START,
})

export const signOutSuccess = () =>({
    type:useractionTypes.SIGN_OUT_SUCCESS,
})

export const signoutFailure = (error) => ({
    type:useractionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = (userCredential) => ({
    type:useractionTypes.SIGN_UP_START,
    payload: userCredential
});

export const signUpSuccess = ({ user,additionalData}) =>({
    type: useractionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData}
})

export const signUpFailure = error => ({
    type: useractionTypes.SIGN_UP_FAILURE,
    payload: error
})


export default setCurrentUser;