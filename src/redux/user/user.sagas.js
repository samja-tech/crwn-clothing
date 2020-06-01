import { takeLatest,put,call,all} from 'redux-saga/effects';

import useractionTypes from './user.types';
import { auth,createUserProfileDocument,googleprovider,getCurrentUser} from '../../firebase/firebase.utils';
import {signInSuccess,signInFailure,signOutSuccess,signoutFailure,signUpSuccess,signUpFailure} from '../user/user.actions';


export function* getUserAuthSnapshot(userAuth,additionalData){
    try {
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({id: userSnapshot.id,...userSnapshot.data()}),
        )

    } catch(error) {
        yield put(signInFailure(error));
    }
}
export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
      yield  put(signoutFailure(error));
    }
}

export function* signUp({ payload: {email,password,displayName} }){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({ user,additionalData: {displayName} }));
    } catch (error) {
        yield put(signUpFailure);
    }
}


export function* signInAfterSignUp({ payload: {user, additionalData} }){
    yield getUserAuthSnapshot(user,additionalData);

}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getUserAuthSnapshot(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleprovider);
        yield getUserAuthSnapshot(user);

    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* emailAndPasswordSignIn({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield getUserAuthSnapshot(user);
    }catch(error){
        yield put(signInFailure(error));
    }    
}

export function* onGoogleSignInStart(){
    yield takeLatest(useractionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}


export function* onEmailSignStart(){
    yield takeLatest(useractionTypes.EMAIL_SIGN_IN_START,emailAndPasswordSignIn);
}

export function* oncheckUserSession(){
    yield takeLatest(useractionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(useractionTypes.SIGN_OUT_START,signOut)
}

export function* onSignUpStart(){
    yield takeLatest(useractionTypes.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(useractionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export default function* userSaga(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignStart),
        call(oncheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
       ]);
}