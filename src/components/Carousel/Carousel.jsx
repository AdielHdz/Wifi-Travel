
import style from "./Carousell.module.css"
import { Link } from "react-router-dom"

import { addToCar } from "../../redux/actions"
import { useDispatch } from "react-redux"

const Carousell = (props) => {
    const { modelo, precio, marca, img, año, id  } = props

    const dispatch = useDispatch()
    const addToCarComponent = () => {
      dispatch(addToCar({modelo, precio, marca, img, año, id}))

    }


      return (
        <div className={style.divCard}> 
             <h2 className={style.marca}> {marca} </h2> 
             <img src={img} alt={modelo} className={style.img} />
             <Link className={style.linkModelo} to={`/phoneDetails/${marca}/${modelo}`} ><h2> {modelo} </h2> </Link>
             <p className={style.precio}>Precio: {precio} </p> 
             <button className={style.button} name={modelo} onClick={addToCarComponent} >Añadir al carrito</button>
        </div>
      )
}

export default Carousell