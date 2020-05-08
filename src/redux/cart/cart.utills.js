export const addItemToCart =(cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map( cartItem =>
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quatity: cartItem.quatity + 1}
            :cartItem
            
        );
    }

    return [...cartItems,{...cartItemToAdd,quatity:1}];
    
}

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quatity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id ?
        {...cartItem, quatity: cartItem.quatity - 1}
        : cartItem
    );
}
