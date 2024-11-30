import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterGroup from "../components/FilterGroup";
import "../Pages/ProductListingPage.css";

const ProductListingPage = () => {
    const [sortOption, setSortOption] = useState("relevant");

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        console.log("Ordenar por:", e.target.value);
    };

    const singleProduct = {
        name: "Tênis K-Swiss V8",
        image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/refs/heads/main/public/produc-image-1.jpeg",
        price: 200,
        priceDiscount: 100,
    };

    return (
        <div className="product-listing-page">
            <FilterGroup />

            <div className="product-listing">
                <span className="results-header" style={{ textAlign: "left" }}>
                    <strong>Resultados para "Tênis"</strong> - 389 produtos
                </span>
                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "25px", marginBottom: "30px" }}>
                    <label htmlFor="sort-select" style={{ marginRight: "10px", alignSelf: "center" }}>
                        Ordenar por:
                    </label>
                    <select
                        id="sort-select"
                        value={sortOption}
                        onChange={handleSortChange}
                        style={{
                            padding: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ddd",
                            cursor: "pointer",
                        }}
                    >
                        <option value="relevant">Mais relevantes</option>
                        <option value="low-to-high">Menor preço</option>
                        <option value="high-to-low">Maior preço</option>
                        <option value="newest">Mais recentes</option>
                    </select>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "50px" }}>
                    {[...Array(12)].map((_, index) => (
                        <Link
                            to={`/product-details/${index}`}
                            key={index}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <ProductCard
                                name={singleProduct.name}
                                image={singleProduct.image}
                                price={singleProduct.price}
                                priceDiscount={singleProduct.priceDiscount}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;
