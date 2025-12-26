import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Pages.css';

const reviewsData = [
    { id: 1, name: "Anitha R.", rating: 5, text: "The Ragi Chocolate Cake was a hit at my son's birthday! Delicious and guilt-free." },
    { id: 2, name: "Karthik S.", rating: 5, text: "Best cookies in Nagercoil. Loved the packaging and the taste." },
    { id: 3, name: "Priya M.", rating: 4, text: "Ordered a custom theme cake. It looked beautiful and tasted amazing." },
    { id: 4, name: "John D.", rating: 5, text: "The Gelato is a must-try. Very creamy and rich flavor." }
];

const Reviews = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <h1>Customer Reviews</h1>
                <p>What our happy customers have to say.</p>
            </header>

            <div className="container section">
                <div className="reviews-grid">
                    {reviewsData.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="reviewer-name">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
