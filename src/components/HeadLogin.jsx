import React, { useState } from 'react';
import Carrinho from '../assets/images/mini-cart.svg';
import { Logo } from './Logo/Logo';
import { Link } from 'react-router-dom';

const HeaderLogin = () => {

    return (
        <header className="flex justify-content-between align-items-baseline p-5">
          <Logo />

            <nav className='ml-2'>
                <Link
                    to="/"
                    className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/contact"
                    className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                    Contact
                </Link>
            </nav>
            <div className='carrinho margin'>
                <img src={Carrinho} alt="Carrinho" />
            </div>
        </header>
    );
};

export default HeaderLogin;