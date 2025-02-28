import { useState, useEffect } from 'react';
import './catalog.css';
import Product from '../components/product';
import DataService from '../services/dataService';

function Catalog() {
    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadProducts = async () =>  {
        const data = await DataService.getProducts();
        setCatalog(data);

        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
    }

    // Use effect is executed when the component loads
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="catalog page container mt-2">
            <h1 className="text-center mb-4 text-success">Check Out Our Fresh Catalog</h1>
            <div className="filters">
                {categories.map(category => (
                    <button key={category} className="btn btn-sm btn-outline-secondary mb-4 me-2">
                        {category}
                    </button>
                ))}
            </div>
            <div className="row g-4">
                {catalog.map(product => (
                    <div key={product._id} className="col-md-4 col-lg-3">
                        <Product data={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
