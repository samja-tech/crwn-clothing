import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-icon.svg';
import './cart-icon.styles.scss';

const cartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchProps)(cartIcon);