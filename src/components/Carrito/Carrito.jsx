import style from "./Carrito.module.css"
import { useSelector } from "react-redux"
import ListProducts from "../ListProducts/ListProducts"
import { AiOutlineShoppingCart } from "react-icons/ai"
const Carrito = (props) => {

    const carrito = useSelector(state => state.carrito)
    return (
        <div className={style.carrito}>
            { carrito.length ? <p className={style.pCompra}>Continuar con la compra <AiOutlineShoppingCart /></p> : <p className={style.pCompra} >Aun no se han agregado articulos</p> } 
            {
            carrito.map(phone => <ListProducts modelo={phone.modelo} marca={phone.marca} img={phone.img} precio={phone.precio} año={phone.año} id={phone.id} />)
            }
        </div>
    )
}


export default Carrito;