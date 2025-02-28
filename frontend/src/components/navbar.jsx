import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function Navbar() {
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getProdsInCart() {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid mx-3">
                <Link className="navbar-brand text-white fw-bold" to="/">
                    Organika Store
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/home">
                                🏠 Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/catalog">
                                🍎 Catalog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">
                                📞 Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">
                                ☰ About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/admin">
                                🔑 Admin
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white position-relative" to="/cart">
                                🛒 View Cart
                                <span className="badge rounded-pill text-bg-danger ms-1 small">
                                    {getProdsInCart()}
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">
                                <i className="fa-solid fa-circle-user me-1"></i>
                                {user.name}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
