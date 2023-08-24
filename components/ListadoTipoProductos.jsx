import styles from '../styles/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Producto from './Producto'

const fetchProductsType = (tipo) => {
    return fetch(`${process.env.API_URL}/ropas?filters[tipo]=${tipo}&populate=imagenes`, { cache: 'no-cache' }).then(res => res.json())
}

export default async function ListadoTipoProductos({tipo}) {

    const {data: products} = await fetchProductsType(tipo)

    return (
        <div className={styles.productsContainer}>
            {products.map(product => (
                <Producto 
                    key={product.id}
                    product={product.attributes}
                />
            ))}
        </div>
    )
}
