import React from 'react';
import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';

const cartDropDown = () => (
    <div className="cart-dropdown">
         <div className="cart-items"></div>
         <CustomButton>Go to CheckOut</CustomButton>
    </div>
)

export default  cartDropDown;