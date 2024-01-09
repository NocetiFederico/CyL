import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Footer = () => {
    return (

        <div className='contenedor'>

        
        <div className='container'>

            <div className='logo'>

                <img src="../../../public/image/logo.jpg" alt="logo-img" />

            </div>

            <div className='datos-admin'>

                <h4>Datos Administrativos</h4>

                <p>Razón Social: CoverCare
                    <br />
                    Cuit: 30-71119543-9
                    <br />
                    Convenio Multilateral: 902-539472-7
                    <br />
                    Domicilio: Madariaga 1364 Parque Industrial de Almirante Brown.
                </p>

            </div>

        </div>
        </div>
                    )
}

export default Footer