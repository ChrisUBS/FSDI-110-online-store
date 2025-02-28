import { useState, useEffect } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
    // Load cart from localStorage when the app starts
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const [user, setUser] = useState({ name: "Chris" });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addProductToCart(product) {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item._id === product._id);

            if (existingItem) {
                // If product exists, update its quantity
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // If product is not in the cart, add it
                return [...prevCart, product];
            }
        });
    }

    function removeProductFromCart(productId) {
        setCart((prevCart) => prevCart.filter(item => item._id !== productId));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{
            cart,
            user,
            addProductToCart,
            removeProductFromCart,
            clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;
