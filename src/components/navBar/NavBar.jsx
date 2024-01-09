import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
    return (

            <div className='calls-header'>
                <header className='header'>
                    <div className='logo'>
                        <img src="/image/logo.jpg" alt="logo-img" />
                    </div>
                    <nav>
                        <ul className='nav-links'>
                            <Link className='link' to="/">Inicio</Link>
                            <Link className='link' to="/catalogo">Catalogo</Link>
                        </ul>
                    </nav>
                    <a href="#" className='btn'><button>Contact</button></a>
                </header>
            </div>

    )
}

export default NavBar