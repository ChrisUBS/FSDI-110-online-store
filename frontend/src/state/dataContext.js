import { createContext, useState, useEffect } from "react";

const DataContext = createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {}
});

export function DataProvider({ children }) {
    // Load cart from localStorage when the app starts
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addProductToCart(product) {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item._id === product._id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    }

    function removeProductFromCart(id) {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <DataContext.Provider value={{ cart, addProductToCart, removeProductFromCart, clearCart }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
