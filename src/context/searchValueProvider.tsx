'use client'

import { createContext, useContext, useState, ReactNode } from "react";

interface childrenProps {
    children: ReactNode;
}

export interface ProductsProps {
    id: number;
    title: string;
    thumbnail: string;
    price: string;
}

interface searchContextProps {
    products: ProductsProps[];
    setProducts: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: ProductsProps[];
    setCartItems: React.Dispatch<React.SetStateAction<ProductsProps[]>>
    isCartVisible: boolean;
    setIsCartVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue: searchContextProps = {
    products: [],
    setProducts: () => {},
    loading: true,
    setLoading: () => {},
    cartItems: [],
    setCartItems: () => {},
    isCartVisible: false,
    setIsCartVisible: () => {},    
};

const SearchContext = createContext<searchContextProps>(defaultValue);

export const useSearchContext = () => useContext(SearchContext);

export function SearchValueProvider({ children }: childrenProps) {
    const [products, setProducts] = useState<ProductsProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState<ProductsProps[]>([]);
    const [isCartVisible, setIsCartVisible] = useState(false);


    return (
        <SearchContext.Provider value={{products, setProducts, loading, setLoading, cartItems, setCartItems, isCartVisible, setIsCartVisible}}>
            {children}
        </SearchContext.Provider>
    );
}