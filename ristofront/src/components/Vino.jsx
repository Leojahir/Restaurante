import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../Cart';
import { AuthContext } from '../Auth';

const Vino = () => {
    const [productos, setProductos] = useState([]);

    const { cart, setCart } = useContext(CartContext);
    const { currentUser } = useContext(AuthContext);

    const addCart = (id) => {

        console.log(id);

        const producto = productos.find(p => p.id == id);

        console.log(producto);
        const productoIndexCart = cart.findIndex(p => p.producto.id == id && p.uid == currentUser.uid);

        const productoCart = {
            uid: currentUser.uid,
            producto: producto,
            cantidad: 1,
        }


        console.log(productoIndexCart);

        if (productoIndexCart >= 0) {
            cart[productoIndexCart].cantidad = cart[productoIndexCart].cantidad + 1;
            setCart([...cart]);
        } else {
            cart.push(productoCart);
            setCart([...cart]);
        }

        console.log(cart);
    }

    const fetchProductos = async () => {
        const response = await axios.get('http://localhost:8000/productos/');
        const productosMenu = response.data.filter(producto => producto.tipo === 'vino');
        setProductos(productosMenu);
    };

    useEffect(() => {
        fetchProductos();
        console.log(productos);
        console.log(currentUser);
    }, []);



    return (
        <main>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {productos.map((producto) => (
                            <div key={producto.id} className="col">
                                <div className="card shadow-sm">
                                    <img src={producto.img} alt="" />
                                    <div className="card-body">
                                        <h1 className="card-text">{producto.nombre}</h1>
                                        <h5>{producto.descripcion}</h5>
                                        <div className="d-flex justify-content-between align-items-center pt-5">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-outline-success" onClick={(e) => {
                                                    addCart(producto.id)
                                                }}>Agregar</button>
                                            </div>
                                            <h2 className="text-body-secondary">{`$${producto.precio}`}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Vino;