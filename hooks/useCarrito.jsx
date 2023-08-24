'use client'
import CarritoContext from '@/context/Carrito-Provider'
import { useContext } from 'react'

const useCarrito = () => {
    return useContext(CarritoContext)
}

export default useCarrito
