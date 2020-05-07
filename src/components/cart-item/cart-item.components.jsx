import React from 'react';

import './cart-item.scss';

const cartItem = ({item:{imageUrl,name,price,quatity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <div className="item-name">{name}</div>
            <div className="price">{quatity} X ${price}</div>
        </div>

    </div>
)

export default cartItem;