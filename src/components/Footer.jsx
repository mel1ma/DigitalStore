import { Logoft } from "./Logo/Logo";
import React from "react";
import '../estfooter.css';
import insta from '../assets/images/instagram.svg';
import face from '../assets/images/facebook.svg';
import twit from '../assets/images/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="section1">
                    <Logoft />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="logos">
                        <img src={face} alt="Facebook logo" />
                        <img src={insta} alt="Instagram logo" />
                        <img src={twit} alt="Twitter logo" />
                    </div>
                </div>

                <div className="info-section">
                    <h3>Informação</h3>
                    <ul>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>

                <div className="info-section">
                    <h3>Categorias</h3>
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>

                <div className="info-section">
                    <h3>Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar <br /> Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div className="footer-fim">
                <p>© 2024 Digital College</p>
            </div>
        </footer>
    );
};

export default Footer;