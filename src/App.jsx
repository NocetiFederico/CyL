import React from 'react'
import './App.css'
import { NavBar } from './components/navBar/NavBar'
// import { Catalogo } from './components/catalogo/Catalogo'
import { Home } from './components/home/Home'
import { Footer } from './components/footer/Footer'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

function App() {
    return (

        <Router>
            <NavBar />
            <Home />
            <Footer />
            <Routes>
                {/* <Route exact path="/" element={<Catalogo />} />
                <Route exact path="/dolar" element={<Home />} />
                <Route exact path="/detalles/:id" element={<DetalleProducto />} />
                <Route exact path="*" element={<ListaProductos />} /> */}
            </Routes>
            
        </Router>

    )
}

export default App