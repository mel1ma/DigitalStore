import React from 'react';

const ProductCard = ({ name, image, price, priceDiscount }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "8px",
            width: "250px",
            height: "auto",
            boxSizing: "border-box",
        }}>

            <img src={image} alt={name} style={{ width: "100%", height: "auto", objectFit: "cover" }} />

            <h3 style={{ fontSize: "18px", color: "#474747", marginTop: "10px", textAlign: "center" }}>
                {name}
            </h3>

            <div style={{ textAlign: "center", marginTop: "8px" }}>
                {priceDiscount && (<span style={{
                    fontSize: "20px", color: "#8F8F8F",
                    textDecoration: "line-through",
                }}>${price}</span>)}
                <span style={{
                    fontSize: "24px", color: priceDiscount ? "#1F1F1F" : "#474747",
                    marginLeft: priceDiscount ? "8px" : "0"
                }}>$ {priceDiscount || price}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
