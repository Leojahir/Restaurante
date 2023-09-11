import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth';
import LogoutButton from "./LogoutButton";



const Header = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav">
                        <div className="menu-toggle">
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-times"></i>
                        </div>
                        <Link to="/" className="logo">Cocina Típica Chilena</Link>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Inicio</Link>
                            </li>
                            {currentUser ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/menu" className="nav-link">Menu</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/vinos" className="nav-link">Carta de Vinos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/reserva" className="nav-link">Reservas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <LogoutButton />
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/carrito" className="nav-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                            </svg>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Link className="btn btn-link nav-link" to="/login">Ingresar</Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero" id="hero">
                <div className="container">
                    <h2 className="h2-sub">
                        <span className="fil">B</span>ienvenido
                    </h2>
                    <h1 className="head">SABORES GOURMET</h1>
                    <div className="he-des">
                        <h5>Lo Mejor de la Comida Típica Chilena</h5>
                        <Link to="/reserva" className="btn cta-btn">Reservas</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
