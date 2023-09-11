import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useLocalStorage('carro',[]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
