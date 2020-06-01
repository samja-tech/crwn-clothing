import { takeLatest,put,call,all } from 'redux-saga/effects';

import { clearCart } from './cart.actions'
import useractionTypes from '../user/user.types';

export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(useractionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)]);
}