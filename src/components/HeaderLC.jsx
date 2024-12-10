import React, { useState } from 'react';
import Carrinho from '../assets/images/mini-cart.svg';
import { Logo } from './Logo/Logo';
import { Link, useNavigate} from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { HiBars3 } from "react-icons/hi2";

const HeaderLC = () => {

    const navigate = useNavigate();

    const [cartVisible, setCartVisible] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container flex align-items-center justify-content-between">
                <div className="logo-menu-container flex align-items-center">
                    <button className="btn-mobile" onClick={toggleMenu}>
                <HiBars3 />
                </button>
                    <Logo />
                </div>
                <img
                    src={Carrinho}
                    alt="Carrinho"
                    style={{ cursor: 'pointer', justifyContent:'end'}}
                    onClick={() => setCartVisible(true)}
                />
            </div>
            <nav className={`nav-itens ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/produtos" className={location.pathname === '/produtos' ? 'active' : ''}>Produtos</Link>
                <Link to="/categoria" className={location.pathname === '/categoria' ? 'active' : ''}>Categoria</Link>
                <Link to="/meus-produtos" className={location.pathname === '/meus-produtos' ? 'active' : ''}>Meus Produtos</Link>
            </nav>


            <div className="sidebar">
                <Sidebar visible={cartVisible} onHide={() => setCartVisible(false)} position="right" className="canva p-sidebar-md" style={{maxHeight: '70vh', borderRadius: '5px', boxShadow: '0px 4px 25px 0px #00000026', border:'none'}}>
                    <h2 className="mb-3" style={{ textAlign: 'center', padding: '20px' }}>Meu Carrinho</h2>
                    <hr />
                    <div className="cart-items" style={{ textAlign: 'center', padding: '20px' }} >
                        <div style={{
                            backgroundColor: '#eeeeee',
                            borderRadius: '12px',
                            padding: '40px',
                            marginBottom: '20px',
                        }}>
                            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Seu carrinho está vazio</h4>
                            <p style={{ fontSize: '16px', color: '#777', marginTop: '10px' }}>Adicione produtos para começar a comprar!</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                    <Button label="Ver ofertas" className="p-button-success mt-3" style={{ 
                            backgroundColor: '#C92071', color: '#fff', borderRadius: '5px', padding: '10px 20px', border: 'none'}} onClick={() => navigate('/produtos')}/>
                        </div>
                </Sidebar>
            </div>
        </header>
    );
};

export default HeaderLC;
