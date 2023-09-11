import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Cart';
import { AuthContext } from '../Auth';

function Carrito() {

    const [currentCart, setCurrentCart] = useState([]);

    const { cart, setCart } = useContext(CartContext);
    const { currentUser } = useContext(AuthContext);

    const updateCurrentCart = () => {
        console.log(cart);
        if(currentUser && cart){
            const currentCartNow = cart.filter(item => item.uid == currentUser.uid);
            setCurrentCart(currentCartNow);
            console.log(currentCart);
        }
    }
    useEffect(() => {
        updateCurrentCart();
      }, [currentUser, cart]);

      const calcularTotal = () => {
        return currentCart.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
      }

      const eliminarProducto = (id) => {
        const productoIndexCart = cart.findIndex(p => p.producto.id == id && p.uid == currentUser.uid);
    
        if (productoIndexCart >= 0) {
          cart[productoIndexCart].cantidad = cart[productoIndexCart].cantidad - 1;
    
          if (cart[productoIndexCart].cantidad >= 1) {
            setCart([...cart]);
          } else {
            cart.splice(productoIndexCart, 1);
            setCart([...cart]);      
          }
        }
        updateCurrentCart();
      }

    return (
        <div className="container-sm pt-5" style={{ minHeight: "55vh" }}>
          <h1>Lista carrito</h1>
          <div className="row mt-4">
            <div className="col-12">
              <table className="table" id="tablaCarrito">
                <thead>
                  <tr className="table-dark">
                    <th scope="col">Descripción</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Total</th>
                    <th scope="col">--</th>
                  </tr>
                </thead>
                <tbody id="datosCarrito">
                  {currentCart.map(item => (
                    <tr key={item.producto.id}>
                      <td>{item.producto.nombre}</td>
                      <td>{item.cantidad}</td>
                      <td>{item.producto.precio.toLocaleString("es-CL")}</td>
                      <td>{(item.producto.precio * item.cantidad).toLocaleString("es-CL")}</td>
                      <td>
                        <button onClick={() => eliminarProducto(item.producto.id)}>
                          -
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>  
          <div className="row mt-4">
            <div className="col offset-8">
              <h3>Total: <span id="totalCarrito">{calcularTotal().toLocaleString("es-CL")}</span></h3>
            </div>
            <div className="row pt-3">
              <label className="col-2 offset-3 col-form-label" htmlFor="imputText">Correo de contacto</label>
              <div className="col-3">
                <input type="email" className="form-control" id="autoSizingInput" required />
                <div className="invalid-feedback">
                  Ingrese Correo.
                </div>
              </div>
            </div>
            <div className="col offset-5 pt-5">
              <button className="btn btn-success" id="btnComprar">Comprar</button>
            </div>
          </div>
        </div>
      );
    }
    

export default Carrito;
