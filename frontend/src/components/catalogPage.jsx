import React from 'react';
import Product from './product';
import './catalogPage.css';

function CatalogPage() {
    const products = [
        { id: 1, name: 'Product A', price: '$10', description: 'A great product!' },
        { id: 2, name: 'Product B', price: '$20', description: 'Another fantastic item!' },
        { id: 3, name: 'Product C', price: '$30', description: 'Don’t miss this one!' },
    ];

    return (
        <div className="catalog-page">
            <h1>Our Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default CatalogPage;
