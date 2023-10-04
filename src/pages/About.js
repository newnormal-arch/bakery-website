import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="hero-section">
            <h2 className="hero-title">About FreshGo</h2>
            <h4 className="hero-subtitle">FreshGo is a family-owned and operated bakery that has been serving the community for over 20 years. We are passionate about baking fresh, delicious goods that our customers love. We use only the highest quality ingredients and our bakers are experts in their craft.</h4>
            <p className="hero-description">Visit us today to experience the FreshGo difference!</p>
            <Link to="/menu" className="hero-btn">Menu</Link>
        </div>
    );
}

export default About;