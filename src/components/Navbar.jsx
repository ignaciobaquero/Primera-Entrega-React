import styles from '../components/Navbar.module.css'


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
    </ul>
  </header>
</nav>

  )
} 

export default Navbar;