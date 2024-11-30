import React, { useState } from 'react';
import Carrinho from '../assets/images/mini-cart.svg';
import '../estilo.css';
import { Logo } from './Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cartVisible, setCartVisible] = useState(false);
    const location = useLocation();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            window.location.href = `/products?filter=${encodeURIComponent(searchTerm)}`;
        }
    };

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
                <div className="busca flex align-items-center">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="p-inputtext"
                    />
                    <Button
                        icon="pi pi-search"
                        className="p-button p-ml-2"
                        onClick={handleSearch}
                    />
                </div>
                <div className="flex align-items-center gap-3">
                    <a href="/cadastro" className="registrar-botao">
                        Cadastre-se
                    </a>
                    <a href="/login" className="login-botao">
                        Entrar
                    </a>
                    <img
                        src={Carrinho}
                        alt="Carrinho"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setCartVisible(true)}
                    />
                </div>
            </div>
            <nav className={`nav-itens ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/produtos" className={location.pathname === '/produtos' ? 'active' : ''}>Produtos</Link>
                <Link to="/categoria" className={location.pathname === '/categoria' ? 'active' : ''}>Categoria</Link>
                <Link to="/meus-produtos" className={location.pathname === '/meus-produtos' ? 'active' : ''}>Meus Produtos</Link>
                <div className="menu-footer">
                    <hr />
                <a href="/login" className="login-botao">
                    Entrar
                </a>                    
                <a href="/cadastro" className="registrar-botao">
                    Cadastre-se
                </a>

    </div>

            </nav>

            <div className="sidebar">
                <Sidebar visible={cartVisible} onHide={() => setCartVisible(false)} position="right" className="canva p-sidebar-md">
                    <h2 className="mb-3">Meu Carrinho</h2>
                    <div className="cart-items">
                        <p>nada ainda no carrinho</p>
                    </div>
                    <Button label="Finalizar Compra" className="p-button-success mt-3" />
                </Sidebar>
            </div>
        </header>
    );
};

export default Header;
