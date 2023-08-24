'use client'
import { createContext, useState } from "react";

const CarritoContext = createContext({});

export function CarritoProvider({children}){
    const [modal, setModal] = useState(false)
    return (
        <CarritoContext.Provider value={{ modal, setModal }} >
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoContext