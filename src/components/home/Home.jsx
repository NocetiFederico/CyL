import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Home = () => {
    return (

        <div className='info-home'>
            <div>
                <h4>QUIENES SOMOS</h4>
                <p>
                    SOMOS CYL INDUMENTARIA <br />
                    Nuestro negocio nace con la idea de que puedas tener ropa a la moda y accesible.<br />
                    Hace 4 años que estamos en el rubro y contamos con un showroom ubicado en Lomas de Zamora muy cerquita de la estacion.<br />
                    Amamos lo que hacemos, hacemos todo con mucho amor y buena onda!<br />
                    Aceptamos todo tipo de sugerencia<br /><br />
                </p>
                <p>
                    GRACIAS   POR   ELEGIRNOS!
                </p>
            </div>

            <div id="carouselExampleIndicators" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../public/image/perchero-home-carrusel-1.jpg" alt="carrusel-img" />
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/image/perchero-home-carrusel-2.jpg" alt="carrusel-img" />
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/image/tienda-home-carrusel.jpg" alt="carrusel-img" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div className='info-plus'>
                <div>
                    <h6>Envíos a todo el pais</h6>
                    <p>Mediante Correo Argentino</p>
                </div>
                <div>
                    <h6>MEDIOS DE PAGO</h6>
                    <p>En el local aceptamos todos los medios de pago <br /> para envio SOLO TRANSFERENCIA!</p>
                </div>
                <div>
                    <h6>Comprá con seguridad</h6>
                    <p>Tus datos siempre protegidos</p>
                </div>
            </div>


            <a href="https://api.whatsapp.com/send?phone=91131025562" className='btn-wsp' target='_blank'> 
            
                <i className='icon-whatsapp'></i>

            </a>

        </div>

        

    )
}

export default Home