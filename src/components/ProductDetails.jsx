import React, { useState } from "react";
import BuyBox from "./BuyBox";
import { Carousel } from "primereact/carousel";
import Sneaker from "../assets/images/White-Sneakers.png";
import ProductListing from "./ProductListing";

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    const product = {
        title: "Tênis Nike Revolution 6 Next Nature Masculino",
        subtitle: "Casual | Nike | REF:38416711",
        rating: 4.7,
        reviews: 90,
        price: 219.0,
        oldPrice: 319.0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        sizes: ["39", "40", "41", "42", "43"],
        colors: ["#000", "#C92071", "#4A90E2", "#7D3C98"],
    };

    const handleBuyClick = () => {
        alert("Produto adicionado ao carrinho!");
    };

    const produtos = [
        { id: 1, name: "Produto 1", image: Sneaker },
        { id: 2, name: "Produto 2", image: Sneaker },
        { id: 3, name: "Produto 3", image: Sneaker },
        { id: 4, name: "Produto 4", image: Sneaker },
    ];


    const productTemplate = (produto) => {
        return (
            <div className="m-1">
                <div className="text-center">
                    <img src={produto.image} alt={produto.name} style={{width: "100%", maxWidth: "400px", height: "auto", paddingTop:'4rem'}}/>
                </div>
            </div>
        );
    };

    return (
        <>
            <div style={{display: "flex", flexDirection: "row", gap: "4rem",justifyContent: "center",
                alignItems: "flex-start",margin: "2rem",}}>
                <div style={{ flex: 1, padding: "0.2rem", borderRadius: "8px", position: 'relative' }}>
                    <Carousel value={[produtos[selectedImage]]}
                        itemTemplate={productTemplate}
                        showIndicators={false}
                        numVisible={1}
                        numScroll={1}
                        className="custom-carousel" style={{ backgroundColor: "#E2E3FF", height: '20rem' }}
                    />

                    <div
                        style={{ flex: 1, display: "flex", justifyContent: "center", gap: "1rem", marginTop: '1rem', }}>
                        {produtos.map((produto, index) => (
                            <div
                                key={produto.id}
                                onClick={() => setSelectedImage(index)}
                                style={{
                                    border: selectedImage === index ? "2px solid #ff6d6d" : "1px solid #ddd",
                                    padding: "4px",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                    background: "#f8f8f8",
                                }}
                            >
                                <img src={produto.image} alt={produto.name} style={{ width: "60px", height: "60px", objectFit: 'scale-down' }} />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <BuyBox
                        title={product.title}
                        subtitle={product.subtitle}
                        rating={product.rating}
                        reviews={product.reviews}
                        price={product.price}
                        oldPrice={product.oldPrice}
                        description={product.description}
                        sizes={product.sizes}
                        colors={product.colors}
                        onBuyClick={handleBuyClick}
                    />
                </div>
            </div>
            <ProductListing/>
        </>
    );
};

export default ProductDetails;
