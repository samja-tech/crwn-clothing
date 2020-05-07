import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-icon.svg';
import './cart-icon.styles.scss';

const cartIcon = ({toggleCartHidden,ItemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{ItemCount}</span>
    </div>
);

const mapDispatchProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});
const mapStateToprops = createStructuredSelector({
    ItemCount: selectCartItemsCount
});
export default connect(mapStateToprops,mapDispatchProps)(cartIcon);