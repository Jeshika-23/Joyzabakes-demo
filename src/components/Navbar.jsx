import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    JoyzaBakes
                </Link>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={toggleMenu} end>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/menu" className="nav-link" onClick={toggleMenu}>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/custom-orders" className="nav-link" onClick={toggleMenu}>Custom Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reviews" className="nav-link" onClick={toggleMenu}>Reviews</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                    <li className="nav-item cart-icon-item">
                        <NavLink to="/cart" className="nav-link" onClick={toggleMenu}>
                            <ShoppingCart size={24} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
