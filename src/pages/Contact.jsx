import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import '../styles/Pages.css';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you.</p>
            </header>

            <div className="container section contact-container">
                <div className="contact-info">
                    <div className="contact-item">
                        <MapPin size={32} className="contact-icon" />
                        <div>
                            <h3>Visit Us</h3>
                            <p>123, Bakery Street, Nagercoil, Tamil Nadu - 629001</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <Phone size={32} className="contact-icon" />
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 81109 60489</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <Mail size={32} className="contact-icon" />
                        <div>
                            <h3>Email Us</h3>
                            <p>hello@joyzabakes.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <Instagram size={32} className="contact-icon" />
                        <div>
                            <h3>Follow Us</h3>
                            <p>@joyzabakes</p>
                        </div>
                    </div>
                </div>

                <div className="map-placeholder">
                    {/* Placeholder for Google Map Embed */}
                    <div className="map-box">Google Map Embed Placeholder</div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
