import React from "react";
import { menuDataList } from "../data/menuData";
import MenuCard from "../components/MenuCard";

function Menu() {
    return (
        <div className="menu-section">
            <h2 className="menu-title">FreshGo Menu</h2>
            <h4 className="menu-subtitle">Our menu features a wide variety of fresh-baked goods. We also offer a variety of specialty items, such as gluten-free and vegan baked goods.</h4>
            <p className="menu-description">Order online today for pickup or delivery!</p>
            <div className="menu-container">
                {menuDataList.map((menu) =>
                    <MenuCard key={menu.id} id={menu.id} title={menu.title} image={menu.image} price={menu.price} description={menu.description} />
                )}
                
            </div>
        </div>

    );
}

export default Menu;