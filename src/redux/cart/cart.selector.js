import {createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
) 

export const selectHiddenCart = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuality,cartItem)=>accumalatedQuality + cartItem.quatity,0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuality,cartItem)=>accumalatedQuality + (cartItem.price * cartItem.quatity),0)
)

