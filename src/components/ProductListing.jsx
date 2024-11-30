import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const singleProduct = {
        name: "K-Swiss V8 - Masculino",
        image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/produc-image-1.jpeg",
        price: 200,
        priceDiscount: 100,
    };

    return (
        <div style={{
            padding: "30px",
            maxWidth: "1240px",
            margin: "70px auto",
            overflowX: "hidden"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                padding: "0 35px"
            }}>
                <h2 style={{ color: "#474747", margin: 0 }}>Produtos em alta</h2>
                <Link
                    to="/produtos"
                    style={{
                    padding: "8px 16px",
                    color: "#C92071",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize:'30px',
                    marginRight:'2rem'
                }}>
                    Ver todos
                    <i className="fas fa-arrow-right" style={{ marginLeft: "8px", fontSize:'30px', marginLeft:'1rem' }}></i>
                </Link>
            </div>

            
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                padding: "0 20px",
                width: "100%",
                boxSizing: "border-box",
                overflowX: "hidden",
            }}>
                {[...Array(8)].map((_, index) => (
                    <ProductCard
                        key={index}
                        name={singleProduct.name}
                        image={singleProduct.image}
                        price={singleProduct.price}
                        priceDiscount={singleProduct.priceDiscount}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
