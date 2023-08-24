import Producto from "./Producto"
import styles from '../styles/products.module.css'

const fetchProducts = (tipo) => {
    return fetch(`${process.env.API_URL}/${tipo}?populate=imagenes`, { cache: 'no-cache' }).then(res => res.json())
}

export default async function ListadoProductos({tipo}) {
    const {data: products} = await fetchProducts(tipo)

    return (
        <div className={styles.productsContainer}>
            {products.map(product => (
                <Producto 
                    key={product.id}
                    product={product.attributes}
                    tipo={tipo}
                />
            ))}
        </div>
        
    )
}



