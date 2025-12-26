import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    // Parse price safely
    const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[^\d.]/g, ''));

    const handleCheckout = () => {
        if (cart.length === 0) return;

        const phoneNumber = "918110960489";
        let message = "Hi JoyzaBakes, I would like to place an order:%0A%0A"; // %0A is newline

        cart.forEach(item => {
            message += `• ${item.quantity} x ${item.name} (${item.price})%0A`;
        });

        const total = getCartTotal();
        message += `%0ATotal Amount: ₹${total}%0A%0APlease confirm availablity and delivery.`;

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

        // Optional: clear cart here if you want, but better to let user clear it after confirmation or manually
    };

    if (cart.length === 0) {
        return (
            <div className="container section text-center empty-cart">
                <ShoppingBag size={64} className="empty-icon" />
                <h2>Your Cart is Empty</h2>
                <p>Looks like you haven't added any delicious treats yet.</p>
                <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container section">
                <header className="cart-header">
                    <h1>Your Cart ({cart.length} items)</h1>
                </header>

                <div className="cart-grid">
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price">{item.price}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <div className="qty-control">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{getCartTotal()}</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>₹{getCartTotal()}</span>
                        </div>
                        <p className="summary-note">No payment required now. Order will be confirmed on WhatsApp.</p>

                        <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
                            Send Order via WhatsApp <ArrowRight size={20} />
                        </button>

                        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
