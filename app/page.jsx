import ListadoProductos from '@/components/ListadoProductos'
import styles from '../styles/products.module.css'
import SliderBasic from '@/components/Slider'

export default function Home() {
  return (
    <>
      <SliderBasic />
      <main className='mainContainer'>
        <div className={`container ${styles.productsListContainer}`}>
          <div>
            <h3>Ropa</h3>
            <ListadoProductos 
              tipo='ropas'
            />  
          </div>

          <div>
            <h3>Ropa</h3>
            <ListadoProductos 
              tipo='calzados'
            />  
          </div>
        </div>
      </main>
    </>
  )
}
