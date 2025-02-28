import { useState, useEffect } from 'react';
import './catalog.css';
import Product from '../components/product';
import DataService from '../services/dataService';

// const catalog = [
//     {
//         "title": "Orange",
//         "image": "/images/orange.png",
//         "price": 12.90,
//         "category": "fruit",
//         "_id": "1"
//     },
//     {
//         "title": "Apple",
//         "image": "/images/apple.png",
//         "price": 10.90,
//         "category": "fruit",
//         "_id": "2"
//     },
//     {
//         "title": "Banana",
//         "image": "/images/banana.webp",
//         "price": 8.90,
//         "category": "fruit",
//         "_id": "3"
//     },
//     {
//         "title": "Carrot",
//         "image": "/images/carrot.webp",
//         "price": 5.90,
//         "category": "vegetable",
//         "_id": "4"
//     },
//     {
//         "title": "Cucumber",
//         "image": "/images/cucumber.png",
//         "price": 6.90,
//         "category": "vegetable",
//         "_id": "5"
//     },
//     {
//         "title": "Tomato",
//         "image": "/images/tomato.webp",
//         "price": 7.90,
//         "category": "vegetable",
//         "_id": "6"
//     },
//     {
//         "title": "Milk",
//         "image": "/images/milk.webp",
//         "price": 3.90,
//         "category": "dairy and eggs",
//         "_id": "7"
//     },
//     {
//         "title": "Egg",
//         "image": "/images/egg.webp",
//         "price": 2.90,
//         "category": "dairy and eggs",
//         "_id": "8"
//     },
//     {
//         "title": "Butter",
//         "image": "/images/butter.png",
//         "price": 4.90,
//         "category": "dairy and eggs",
//         "_id": "9"
//     },
//     {
//         "title": "Corn",
//         "image": "/images/corn.webp",
//         "price": 1.90,
//         "category": "vegetable",
//         "_id": "10"
//     }
// ];

function Catalog() {
    const [catalog, setCatalog] = useState([]);
    const [categories, setCategories] = useState([]);

    const [allProducts, setAllProducts] = useState([]);

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

    // useEffect(() => {
    //     async function fetchProducts() {
    //         try {
    //             const response = await fetch("http://127.0.0.1:5000/api/catalog");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch products");
    //             }
    //             const data = await response.json();
    //             setCatalog(data);

    //             // Extract unique categories
    //             const uniqueCategories = [...new Set(data.map(product => product.category))];
    //             setCategories(uniqueCategories);
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     }

    //     fetchProducts();
    // }, []);

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
