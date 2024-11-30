import React from 'react';
import Layout from '../components/Layout/Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductsOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const product = {
    id: 1,
    name: "Produto Exemplo",
    reference: "12345",
    stars: 4.5,
    price: 200.0,
    priceDiscount: 149.9,
    description: "Descrição do produto",
    images: [
      { src: "/product-image-1.png" },
      { src: "/product-image-2.png" },
    ],
    options: {
      size: ["39", "41", "42"],
      color: ["#000", "#111", "#222"],
    },
  };

  const recommendedProducts = [
    { name: "Produto Recomendado 1", image: "/produto1.png", price: 200, priceDiscount: 149.9 },
    { name: "Produto Recomendado 2", image: "/produto2.png", price: 49.9 },
  ];

  return (
    <Layout>
      <div className="product-view-page">
        <div className="product-gallery">
          <Gallery
            images={product.images}
            showThumbs={true}
            width="700px"
            height="570px"
            radius="4px"
          />
        </div>
        <div className="buy-box">
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={100}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <ProductOptions options={product.options.size} radius="4px" shape="square" type="text" />
            <ProductOptions options={product.options.color} radius="4px" shape="circle" type="color" />
          </BuyBox>
        </div>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: "Ver todos", href: "/products" }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </Layout>
  );
};

export default ProductViewPage;