import React from 'react';
import './product.css';

function Product({ product }) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
