import  { createContext, useState } from 'react';

export const MyContext = createContext();

export const WishListProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
      });

    return (
        <MyContext.Provider value={[wishlist, setWishlist]}>
            {children}
        </MyContext.Provider>
    );
};