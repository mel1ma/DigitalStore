import React from 'react';
import './Estilohp.css';
import calca from '../assets/images/calca.png';
import blusa from '../assets/images/camiseta.png';
import fone from '../assets/images/fone.png';
import sapato from '../assets/images/tenis.png';
import Gallery from '../components/Gallery';
import ProductListing from "../components/ProductListing";

const Homepage = () => {

    return (
        <>
            <section>    
                <Gallery/>
                <h2 className='text-start m-5'style={{color:'#474747'}}>Coleções em destaque</h2>
                <ul className="flex justify-content-evenly list-none px-3 gap-3">
                    <div className="d-flex" style={{width:'405px', height: '251px', backgroundImage: "url('src/assets/images/collection1.png')"}}>
                        <li></li>
                    </div>
                    <div className="d-flex" style={{width:'405px', height: '251px', backgroundImage: "url('src/assets/images/collection2.png')"}}>
                        <li></li>
                    </div>
                    <div className="d-flex" style={{width:'405px', height: '251px', backgroundImage: "url('src/assets/images/collection3.png')"}}>
                        <li></li>
                    </div>
                </ul>
            </section>

                <h3 className='text-center m-5'style={{color:'#474747'}}>Coleções em destaque</h3>
                <ul className='flex justify-content-center flex-wrap gap-5' style={{listStyle:'none'}}>
                    <div className='itemlista'>
                        <img src={blusa} alt="Camisetas" className="imglista" />
                        <li className="legenda d-flex align-itens-end">Camisetas</li>
                    </div>
                    <div className='itemlista'>
                        <img src={calca} alt="Calças" className="imglista" />
                        <li className="legenda">Calças</li>
                    </div>
                    <div className='itemlista'>
                        <img src={calca} alt="Bonés" className="imglista" />
                        <li className="legenda">Bonés</li>
                    </div>
                    <div className='itemlista'>
                        <img src={fone} alt="Headphones" className="imglista" />
                        <li className="legenda">Headphones</li>
                    </div>
                    <div className='itemlista'>
                        <img src={sapato} alt="Tênis" className="imglista" />
                        <li className="legenda">Tênis</li>
                    </div>
                </ul>
                <ProductListing/>
        </>
    );
}
 
export default Homepage;