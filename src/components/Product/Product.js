import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3>{name}</h3>
                <br />
                <p><small>Sold by: {seller}</small></p>
                <h5>Price: ${price}</h5>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;