import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="hero-section">
            <h2 className="hero-title">FreshGo<br/>Your Home for Fresh-Baked Goods</h2>
            <h4 className="hero-subtitle">We bake everything fresh daily with the highest quality ingredients.</h4>
            <p className="hero-description">Visit our menu to see what's baking today!</p>
            <Link to="/menu" className="hero-btn">Menu</Link>
        </div>
    );
}

export default Home;