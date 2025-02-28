import './product.css';
import { useContext, useState } from 'react';
import QuantityPicker from './quantityPicker';
import DataContext from '../state/dataContext';

function Product(props) {
    const [quantity, setQuantity] = useState(0);
    const addProductToCart = useContext(DataContext).addProductToCart;

    function addToCart() {
        if (quantity > 0) {
            let prodForCart = { ...props.data, quantity: quantity };
            addProductToCart(prodForCart);
            setQuantity(0);
        }
    }

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    return (
        <div className="card product">
            <img src={props.data.image} className="card-img-top" alt="Product" />
            <div className="card-body text-center">
                <h5 className="card-title text-primary">{props.data.title}</h5>

                <table className="table table-striped table-bordered text-center">
                    <thead className="table-success">
                        <tr>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${props.data.price.toFixed(2)}</td>
                            <td>${(props.data.price * quantity).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="d-flex justify-content-between align-items-center mt-2">
                    <QuantityPicker quantity={quantity} onChange={handleQuantity} />
                    <button className="btn btn-sm btn-success" onClick={addToCart}>
                        <i className="fa-solid fa-cart-shopping me-1"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;
