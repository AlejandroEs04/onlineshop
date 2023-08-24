'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import logo from '../public/img/Logo.png'
import userIcon from '../public/img/UserCircleIcon.svg'
import shoppingCar from '../public/img/ShoppingCar.svg'
import useCarrito from '@/hooks/useCarrito'
import CarritoPage from './Carrito'

function Header() {
  const {modal, setModal} = useCarrito()
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.linkContainer}>
          <Link href='/'>
              <Image src={logo} alt='logo' width={150} height={100} />
          </Link>

          <nav className={styles.navContainer}>
              <Link href='/'>Inicio</Link>
              <Link href='/ropas'>Ropa</Link>
              <Link href='/calzados'>Calzado</Link>
              <Link href='/accesorios'>Accesorios</Link>
          </nav>
        </div>

        <div className={styles.actionContainer}>
          <button
            onClick={() => setModal(!modal)}
          >
            <Image src={shoppingCar} width={50} height={50} alt='carrito image' />
          </button>

          <Link href='/usuario'>
            <Image src={userIcon} width={50} height={50} alt='user image' />
          </Link>
        </div>
      </header>
      {modal && <CarritoPage /> }
    </>
  )
}

export default Header
