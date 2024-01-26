import { createContext, useContext } from "react";


interface StoreContextValue {

}


export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function useStoreContext() {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error('Oops - we do not seem to be inside provider')
    }
}