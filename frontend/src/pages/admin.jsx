import dataService from '../services/dataService';
import './admin.css';
import { useEffect, useState } from 'react';

function Admin() {

    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [coupon, setCoupon] = useState({
        code: '',
        discount: 0
    });

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        image: '',
        category: ''
    });

    function resetFieldsProduct() {
        setProduct({
            title: '',
            price: '',
            image: '',
            category: ''
        });
    }

    function resetFieldsCoupon() {
        setCoupon({
            code: '',
            discount: ''
        });
    }
    
    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log('text changed!', text, name);

        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    }

    const loadProducts = async () => {
        const data = await dataService.getProducts();
        setAllProducts(data);
    }

    async function saveProduct() {
        console.log('Product:', product);

        let validProduct = {...product};
        validProduct.price = parseFloat(validProduct.price);
        let savedProduct = await dataService.saveProduct(validProduct);
        console.log(savedProduct);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
        console.log('All Products:', allProducts);
        resetFieldsProduct();
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log('text changed!', text, name);

        /**
         * 3 steps to modify Obj or Arrays in State vars:
         * - Create a copy
         * - Modify the copy
         * - Set the copy back
         */

        let copy = { ...coupon };
        copy[name] = text;
        setCoupon(copy);
    }

    const loadCoupons = async () => {
        const data = await dataService.getCoupons();
        setAllCoupons(data);
    }

    async function saveCoupon() {
        console.log('Coupon:', coupon);

        let validCoupon = {...coupon};
        validCoupon.discount = parseFloat(validCoupon.discount);
        let savedCoupon = await dataService.saveCoupon(validCoupon);
        console.log(savedCoupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
        console.log('All Coupons:', allCoupons);
        resetFieldsCoupon();
    }

    useEffect(() => {
        loadProducts();
        loadCoupons();
    }, []);

    return (
        <div className="admin page">
            <h1 className='text-success'>Store administration</h1>
            <div className="admin-container d-flex justify-content-around">
                <div className='register col-7 pb-4'>
                    <h3>Register new product</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="product-name">Product name</label>
                            <input type="text" className="form-control" id="product-name" placeholder="Enter product name" onChange={handleProduct} name='title' value={product.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-price">Product price</label>
                            <input type="number" className="form-control" id="product-price" placeholder="Enter product price" onChange={handleProduct} name='price' value={product.price}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-image">Product image</label>
                            <input type="text" className="form-control" id="product-image" placeholder="Enter product image" onChange={handleProduct} name='image' value={product.image}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="product-category">Product category</label>
                            <input type="text" className="form-control" id="product-category" placeholder="Enter product category" onChange={handleProduct} name='category' value={product.category}/>
                        </div>

                    </form>
                    <div className='justify-content-center d-flex'>
                        <button className="btn btn-dark" onClick={saveProduct}>Save Product</button>
                    </div>

                    {allProducts.map(pr => <li>{pr.title} - ${pr.price} - {pr.category}</li>)}
                </div>

                <div className='coupons col-4 pb-4'>
                    <h3>Coupon Codes</h3>

                    <form>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <input type="text" className="form-control" id="coupon-code" placeholder="Enter code" onChange={handleCoupon} name='code' value={coupon.code}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="discount">Discount</label>
                            <input type="number" className="form-control" id="coupon-discount" placeholder="Enter discount" onChange={handleCoupon} name='discount' value={coupon.discount}/>
                        </div>

                    </form>
                    <div className='justify-content-center d-flex'>
                        <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
                    </div>

                    {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}

                </div>
            </div>
        </div>
    );
}

export default Admin;