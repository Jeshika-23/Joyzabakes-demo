import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('joyzaCart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('joyzaCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace('₹', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
