import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { categories, products } from '../data/products';
import { useCart } from '../context/CartContext';
import '../styles/Menu.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { addToCart } = useCart();

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(product => product.category === activeCategory);

    const handleOrder = (productName) => {
        const phoneNumber = "918110960489";
        const message = `Hi JoyzaBakes, I would like to order: ${productName}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="menu-page">
            <header className="menu-header">
                <div className="container">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Menu
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Delicious, Healthy & Homemade
                    </motion.p>
                </div>
            </header>

            <div className="container section">
                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="product-grid"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map(product => (
                            <motion.div
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ scale: 0.9, opacity: 0 }}
                                key={product.id}
                                className="product-card"
                            >
                                <div className="card-image-wrapper">
                                    <Link to={`/menu/${product.id}`}>
                                        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                                    </Link>
                                    <button
                                        className="btn-quick-add"
                                        onClick={() => addToCart(product)}
                                        aria-label="Add to Cart"
                                    >
                                        <ShoppingCart size={18} />
                                    </button>
                                    {product.highlights && product.highlights.includes("No Maida") && (
                                        <span className="badge-healthy">Healthy</span>
                                    )}
                                </div>

                                <div className="product-info">
                                    <span className="product-category">{product.category}</span>
                                    <Link to={`/menu/${product.id}`} className="product-title-link">
                                        <h3>{product.name}</h3>
                                    </Link>
                                    <p className="product-desc">{product.description.substring(0, 60)}...</p>

                                    <div className="divider-sm"></div>

                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button
                                            className="btn-card-order"
                                            onClick={() => handleOrder(product.name)}
                                        >
                                            Order <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Menu;
