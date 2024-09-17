import  { createContext, useState } from 'react';

export const AddtoCartContext = createContext();

export const AddtoCartProvider = ({ children }) => {
    const [addToCart, setAddToCart] = useState(() => {
        const savedAddToCart = localStorage.getItem('addtocart');
        return savedAddToCart ? JSON.parse(savedAddToCart) : [];
      });

    return (
        <AddtoCartContext.Provider value={[addToCart, setAddToCart]}>
            {children}
        </AddtoCartContext.Provider>
    );
};