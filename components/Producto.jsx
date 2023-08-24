import styles from '../styles/products.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Producto({product, tipo}) {
    const { Descripcion, Nombre, Precio, url, imagenes } = product
    return (
        <Link href={`/${tipo}/${url}`} className={styles.productContainer}>
            <div className={styles.imageContainer}>
                <Image src={imagenes.data[0].attributes.url} width={150} height={200} alt={`imagen ${Nombre}`} />
            </div>
            <div>
                <div>
                    <p className={styles.nombre}>{Nombre}</p>
                    <p className={styles.descripcion}>{Descripcion}</p> 
                </div>
                <p className={styles.precio}>${Precio} mxn</p>  
            </div>
        </Link>
    )
}

export default Producto
