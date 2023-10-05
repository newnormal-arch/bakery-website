import React from "react";

function MenuCard({ image, title, price, description }) {
    return (
        <div className='menuCard'>
            <img src={image} alt='' />
            <div>
                <h5>{title}</h5>
                <p>R {price}</p>
                <p>{description}</p>
            </div>
            <button>Add to cart</button>
        </div>
    );
}

export default MenuCard;