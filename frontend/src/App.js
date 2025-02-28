// import logo from './logo.svg';
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import Admin from './pages/admin';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import GlobalProvider from './state/globalProvider';

function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <div className="App">
                    <Navbar />

                    <Router>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/catalog" element={<Catalog />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/admin" element={<Admin />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                    </Router>

                    <Footer />
                </div >
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
