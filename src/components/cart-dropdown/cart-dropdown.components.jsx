import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

const cartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>
                )
            }
        </div>
        <CustomButton>Go to CheckOut</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(cartDropDown);