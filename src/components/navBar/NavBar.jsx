import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
    return (

            <div className='calls-header'>
                <header className='header'>
                    <div className='logo'>
                        <img src="../../../public/image/logo.jpg" alt="logo-img" />
                    </div>
                    <nav>
                        <ul className='nav-links'>
                            <li><a href="#"> Services </a></li>
                            <li><a href="#"> Projects</a></li>
                            <li><a href="#"> About</a></li>
                        </ul>
                    </nav>
                    <a href="#" className='btn'><button>Contact</button></a>
                </header>
            </div>

    )
}

export default NavBar