import React from 'react';
import '../styles/Pages.css';

const About = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1>About JoyzaBakes</h1>
                <p>Passion for Healthy Baking.</p>
            </header>

            <div className="container section about-content">
                <div className="text-block">
                    <h2>Our Story</h2>
                    <p>
                        JoyzaBakes started with a simple mission: to make cakes and treats that are not just delicious but also good for you.
                        Based in Nagercoil, we realized that there was a lack of genuine healthy bakery options that avoided refined flour (Maida)
                        and artificial additives.
                    </p>
                    <p>
                        What began as a home kitchen experiment has now grown into a brand trusted by hundreds of families for their celebrations.
                        Every product that leaves our kitchen is made with love, care, and the finest ingredients.
                    </p>

                    <h2>Our Commitment</h2>
                    <ul className="commitment-list">
                        <li><strong>100% Wheat & Ragi:</strong> We strictly say no to Maida.</li>
                        <li><strong>No Artificial Colours:</strong> We use natural extracts from vegetables and fruits.</li>
                        <li><strong>Freshly Made:</strong> We bake on order to ensure maximum freshness.</li>
                    </ul>
                </div>
                <div className="image-block">
                    <div className="about-img-placeholder">Baker / Kitchen Image</div>
                </div>
            </div>
        </div>
    );
};

export default About;
