import styles from '../components/Navbar.module.css'
import CartWidget from './CartWidget';


const Navbar = () => {

  return (
<nav className={styles.navbar}>
  <header>
    <h1 className={styles.logo}>Chitercaps</h1>
    <ul className={styles.links}>
      <li>Inicio</li>
      <li>Sobre Nosotros</li>
      <li>Sucursales</li>
      <li>Contacto</li>
       <CartWidget></CartWidget>
    </ul>
  </header>
 
</nav>

  )
} 

export default Navbar;