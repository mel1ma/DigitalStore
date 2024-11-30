import React from 'react';

const BuyBox = ({ title, subtitle, rating, reviews, price, oldPrice, description, sizes, colors, onBuyClick }) => {
    return (
        <div style={{
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: "400px",
        }}>
            {/* Título e subtítulo */}
            <h1 style={{ fontSize: "24px", margin: "0 0 10px", color: "#333" }}>{title}</h1>
            <p style={{ fontSize: "14px", color: "#777", margin: "0 0 16px" }}>{subtitle}</p>

            {/* Avaliação */}
            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "18px", color: "#f5a623" }}>★ {rating}</span>
                <span style={{ fontSize: "14px", color: "#777" }}>({reviews} avaliações)</span>
            </div>

            {/* Preços */}
            <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>R$ {price.toFixed(2)}</span>
                {oldPrice && (
                    <span style={{
                        marginLeft: "8px",
                        fontSize: "16px",
                        color: "#aaa",
                        textDecoration: "line-through",
                    }}>
                        R$ {oldPrice.toFixed(2)}
                    </span>
                )}
            </div>

            {/* Descrição */}
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "16px" }}>{description}</p>

            {/* Tamanhos */}
            <div style={{ marginBottom: "16px" }}>
                <strong style={{ fontSize: "14px", color: "#333" }}>Tamanho</strong>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            style={{
                                padding: "8px 12px",
                                border: "1px solid #ddd",
                                borderRadius: "4px",
                                backgroundColor: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cores */}
            <div style={{ marginBottom: "16px" }}>
                <strong style={{ fontSize: "14px", color: "#333" }}>Cores</strong>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                backgroundColor: color,
                                border: "1px solid #ddd",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            </div>
            <button
                onClick={onBuyClick}
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    backgroundColor: "#f1c40f",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Comprar
            </button>
        </div>
    );
};

export default BuyBox;
