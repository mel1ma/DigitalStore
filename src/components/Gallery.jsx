import React from 'react';
import { Carousel } from 'primereact/carousel';
import Slide1 from '../assets/images/Slide1ed.png';
import { useNavigate } from 'react-router-dom';
const Gallery = () => {

    const navigate = useNavigate();

    const products = [
        { id: 1, name: 'Produto 1', image: Slide1 },
        { id: 2, name: 'Produto 2', image: Slide1 },
        { id: 3, name: 'Produto 3', image: Slide1 }
    ];

    const responsiveOptions = [
        { breakpoint: '200px', numVisible: 1, numScroll: 1 },
        { breakpoint: '200px', numVisible: 1, numScroll: 1 }
    ];

    const productTemplate = (product) => {
        return (
            <div className="m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
                </div>
                <div>
                <button className="button-carousel" onClick={() => navigate('/produtos')}>Ver Ofertas</button>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="card d-flex justify-content-center">
                    <Carousel value={products} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} showIndicators autoplayInterval={2000}/>
            </div>
        </>
    );
}
 
export default Gallery;