import { all,call} from 'redux-saga/effects';

import { shopSaga } from '../redux/shop/shop.sagas';
import userSaga from '../redux/user/user.sagas';
import { cartSaga } from '../redux/cart/cart.sagas'

export default function* rootSaga(){
    yield all([
        call(shopSaga),
        call(userSaga),
        call(cartSaga)
    ]);
}