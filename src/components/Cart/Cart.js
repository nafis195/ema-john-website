import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    //const productPrice = cart.reduce( (total, prd) => total + prd.price, 0)
    let productPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        productPrice = productPrice + product.price;
    }

    let shipping = 0;
    if(productPrice > 35){
        shipping = 0;
    }
    else if(productPrice > 15){
        shipping = 4.99;
    }
    else if(productPrice > 0){
        shipping = 12.99;
    }

    const tax = productPrice / 10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Total items: {formatNumber(cart.length)}</h5>
            <p>Product price: {formatNumber(productPrice)}</p>
            <p>Shipping cost: {formatNumber(shipping)}</p>
            <p>Tax: {formatNumber(tax)}</p>
            <p>Total price: {formatNumber(productPrice + shipping + tax)}</p>

        </div>
    );
};

export default Cart;