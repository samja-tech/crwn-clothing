import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_FxBZoeLhmxiZWvIg3YKCCEoi00k6T7S2T9';

    const onToken = token => {
        console.log(token);
        alert("Payment Success");
    }

    return (
        <StripeCheckout 
        label = "Pay Now"
        name = "CRWN Clothing Pvt Ltd."
        billingAddress
        shippingAddress
        image = 'https://sendeyo.com/up/d/f3eb2117da'
        description ={`Your total is $${price}`}
        amount = { priceForStripe }
        panelLabel = 'Pay now'
        token = {onToken}
        stripeKey = {publishablekey}
        />
    )

}

export default stripeCheckoutButton;