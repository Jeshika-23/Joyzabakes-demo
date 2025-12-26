import React from 'react';
import { Cake, Gift, Calendar } from 'lucide-react';
import '../styles/Pages.css';

const CustomOrders = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1>Custom Orders</h1>
                <p>Celebrations made special with healthy treats.</p>
            </header>

            <div className="container section">
                <div className="custom-orders-grid">
                    <div className="info-card">
                        <Cake size={48} className="info-icon" />
                        <h3>Birthday & Theme Cakes</h3>
                        <p>Tell us your theme, and we'll bake it healthy! Wheat/Ragi base with natural colors.</p>
                    </div>
                    <div className="info-card">
                        <Calendar size={48} className="info-icon" />
                        <h3>Festival Specials</h3>
                        <p>Special hampers for Diwali, Christmas, and other occasions.</p>
                    </div>
                    <div className="info-card">
                        <Gift size={48} className="info-icon" />
                        <h3>Corporate & Bulk Gifting</h3>
                        <p>Healthy snack boxes for your employees and clients.</p>
                    </div>
                </div>

                <div className="enquiry-box">
                    <h2>Got a Request?</h2>
                    <p>Send us your requirements via WhatsApp, and we'll get back to you with a quote.</p>
                    <a href="https://wa.me/918110960489?text=I%20have%20a%20custom%20order%20enquiry" target="_blank" rel="noreferrer" className="btn btn-primary">
                        Enquire Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CustomOrders;
