import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './Auth';
import { CartProvider } from "./Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
import Registro from "./components/Registro";
import Menu from "./components/Menu";
import Carrito from "./components/Carrito";
import Vino from "./components/Vino";

function App() {


  return (
    <Router>
      <AuthProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/vinos" element={<Vino/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
          {<Footer />}
        </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;