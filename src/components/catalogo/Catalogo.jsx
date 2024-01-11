import React, { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import './style.css'
import { Link } from 'react-router-dom';


export const Catalogo = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                <div>ERROR!</div>
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div>Cargando...</div>
            ) : (


                <div className='container-catalogo'>
                    <div className='container-cat-fil'>
                        <div className='categorias'>
                            <h4>Categorias</h4>
                            <div>
                                <i><button>🔥SALE🔥</button></i>
                                <i><button>Air Force</button></i>
                                <i><button>SB Dunk</button></i>
                                <i><button>Furiosas</button></i>
                                <i><button>Adidas</button></i>
                                <i><button>Fila</button></i>
                                <i><button>Vans</button></i>
                                <i><button>Converse</button></i>
                                <i><button>Gomones</button></i>
                                <i><button>Ojotas</button></i>
                            </div>

                        </div>
                        <div className='filtros'>
                            <h4>Filtros</h4>
                        </div>
                        <div className='talles'>
                            <h5>Talles</h5>
                            <div>
                                <i><button>37</button></i>
                                <i><button>38</button></i>
                                <i><button>39</button></i>
                                <i><button>40</button></i>
                                <i><button>41</button></i>
                            </div>


                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti corporis assumenda optio expedita saepe sunt officia ut facere praesentium maxime, beatae temporibus reprehenderit impedit natus ipsum tempore voluptas amet iste!
                            </p>
                        </div>
                    </div>
                    <div className='card-list'>
                        {items.map((item) => (
                            <div key={item.id} className='card'>
                                <img src={item.photo} alt={item.photo} />
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                                <Link to={`/productoDetallado/${item.id}`}>
                                    <button>Ver Detalles</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

