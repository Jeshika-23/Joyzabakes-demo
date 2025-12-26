import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">JoyzaBakes</h3>
                    <p>Homemade healthy goods, baked with love in Nagercoil.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/custom-orders">Custom Orders</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p><MapPin size={16} /> Nagercoil, Tamil Nadu</p>
                    <p><Phone size={16} /> +91 81109 60489</p>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JoyzaBakes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
