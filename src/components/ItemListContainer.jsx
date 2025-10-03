import styles from '../components/ItemListContainer.module.css'


const ItemListContainer = ({bienvenido}) => {


 return (
   <main>
    <div className={styles.bienvenido}>
    <h1 style={{ color: "white " }}>Bienvenido Usuario</h1>
    </div>
   </main>

 )

}

export default ItemListContainer;