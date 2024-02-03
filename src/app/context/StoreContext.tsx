import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Product } from "../models/product";


export interface StoreContextValue {
   products: Product[] | null;
   totalAmount: number;
}


export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error('Oops - we do not seem to be inside provider')
    }
}


export function StoreProvider ({ children } : PropsWithChildren<any> ) {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [totalAmount, setTotalAmount] = useState<number>(0)
    const updateTotalAmount = (value: number) => {
        setTotalAmount((prevTotalAmount) => prevTotalAmount + value);
      };
    
    return (
        <StoreContext.Provider value={{products, totalAmount}}>
        {children}
        </StoreContext.Provider>
    )   
}
