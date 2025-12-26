import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, ShieldCheck, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import '../styles/Home.css';


const Home = () => {
    const { addToCart } = useCart();
    const featuredProducts = products.slice(0, 4); // Display first 4 products

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Healthy Wheat & Ragi Bakes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        No Maida. No Artificial Colours. Pure Homemade Goodness.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/menu" className="btn btn-primary">
                            Explore Menu <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Our Specialities</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎂</div>
                            <h3>Custom Cakes</h3>
                            <p>Birthday, Wedding & Theme Cakes made with healthy ingredients.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🍪</div>
                            <h3>Healthy Cookies</h3>
                            <p>Wheat & Ragi cookies perfect for tea time.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🥐</div>
                            <h3>Fresh Pastries</h3>
                            <p>Delicious slices for your daily cravings.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🍦</div>
                            <h3>Gelato</h3>
                            <p>Creamy, rich, and homemade frozen desserts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container why-us-container">
                    <div className="why-us-content">
                        <h2 className="section-title">Why JoyzaBakes?</h2>
                        <ul className="benefits-list">
                            <li>
                                <ShieldCheck className="benefit-icon" />
                                <div>
                                    <h4>Healthy Ingredients</h4>
                                    <p>We use only Wheat & Ragi. Absolutely no Maida.</p>
                                </div>
                            </li>
                            <li>
                                <Heart className="benefit-icon" />
                                <div>
                                    <h4>No Artificial Colours</h4>
                                    <p>Natural flavors and colors for a safe treat.</p>
                                </div>
                            </li>
                            <li>
                                <Star className="benefit-icon" />
                                <div>
                                    <h4>Homemade & Hygienic</h4>
                                    <p>Baked with care in a clean, home environment.</p>
                                </div>
                            </li>
                        </ul>
                        <Link to="/about" className="btn btn-outline">Read Our Story</Link>
                    </div>
                    <div className="why-us-image-placeholder">
                        {/* Placeholder for an image */}
                        <div className="placeholder-box">Bakery Image</div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Featured Bakes</h2>
                    <div className="features-grid">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="feature-card product-card-home">
                                <Link to={`/menu/${product.id}`}>
                                    <img src={product.image} alt={product.name} className="home-product-img" />
                                </Link>
                                <div className="home-product-info">
                                    <span className="home-product-cat">{product.category}</span>
                                    <Link to={`/menu/${product.id}`} className="home-product-title">
                                        <h3>{product.name}</h3>
                                    </Link>
                                    <p className="home-product-price">{product.price}</p>
                                    <button
                                        className="btn-add-cart-home"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart <ShoppingCart size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2>Ready to Order?</h2>
                    <p>We accept bulk, festival, and corporate orders across India.</p>
                    <a href="https://wa.me/918110960489" target="_blank" rel="noreferrer" className="btn btn-primary">
                        Order on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
