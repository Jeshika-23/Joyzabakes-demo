import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ArrowLeft, ShoppingBag, Heart, CheckCircle } from 'lucide-react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Find product (ensure ID comparison works for strings/numbers)
    const product = products.find(p => p.id.toString() === id);

    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <div className="container section text-center">
                <h2>Product not found</h2>
                <button className="btn btn-outline" onClick={() => navigate('/menu')}>Back to Menu</button>
            </div>
        );
    }

    const handleQuantityChange = (delta) => {
        const newQty = quantity + delta;
        if (newQty >= 1) setQuantity(newQty);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="product-detail-page bg-light-warm">
            <div className="container">
                {/* Breadcrumb / Back */}
                <div className="breadcrumb">
                    <button className="back-link" onClick={() => navigate('/menu')}>
                        <ArrowLeft size={18} /> Back to Menu
                    </button>
                </div>

                <div className="product-detail-wrapper">
                    {/* Image Section */}
                    <div className="product-image-container">
                        <img src={product.image} alt={product.name} className="detail-hero-img" />
                        <div className="image-badges">
                            <span className="badge badge-primary"><Heart size={14} fill="white" /> Best Seller</span>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="product-info-container">
                        <div className="info-header">
                            <span className="detail-category">{product.category}</span>
                            <h1 className="detail-title">{product.name}</h1>
                            <div className="detail-price-row">
                                <span className="detail-price">{product.price}</span>
                                {product.serves && <span className="pax-info">({product.serves})</span>}
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="highlights-row">
                            {product.highlights && product.highlights.map((tag, index) => (
                                <div key={index} className="highlight-pill"><CheckCircle size={14} /> {tag}</div>
                            ))}
                        </div>

                        <p className="detail-description">
                            {product.description}
                        </p>

                        {/* Desktop Quantity & Action */}
                        <div className="desktop-actions">
                            <div className="quantity-wrapper">
                                <span className="qty-label">Quantity</span>
                                <div className="qty-control-lg">
                                    <button onClick={() => handleQuantityChange(-1)} disabled={quantity === 1}><Minus size={18} /></button>
                                    <span>{quantity}</span>
                                    <button onClick={() => handleQuantityChange(1)}><Plus size={18} /></button>
                                </div>
                            </div>

                            <div className="action-row">
                                <button
                                    className={`btn-add-main ${added ? 'added' : ''}`}
                                    onClick={handleAddToCart}
                                >
                                    <ShoppingBag size={20} />
                                    {added ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                                <a
                                    href={`https://wa.me/918110960489?text=Hi JoyzaBakes, I want to order ${quantity} x ${product.name}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-whatsapp-main"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Action Bar */}
            <div className="mobile-action-bar">
                <div className="mobile-price">
                    <small>Total</small>
                    <span>{product.price}</span>
                </div>
                <button
                    className="btn-add-mobile"
                    onClick={handleAddToCart}
                >
                    {added ? 'Added' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
