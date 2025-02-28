import './productInCart.css';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function ProductInCart({ product }) {
    const { removeProductFromCart } = useContext(DataContext);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src={product.image} alt={product.title} width="50" className="me-3" />
                <div>
                    <h5>{product.title}</h5>
                    <p>Sub-total: ${product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button className="btn btn-danger" onClick={() => removeProductFromCart(product._id)}>Delete</button>
        </li>
    );
}

export default ProductInCart;