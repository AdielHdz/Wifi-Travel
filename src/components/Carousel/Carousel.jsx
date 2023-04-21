
import style from "./Carousell.module.css"
import { Link } from "react-router-dom"

import { addToCar } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Carousell = (props) => {
    const { modelo, precio, marca, img, año, id  } = props

    const dispatch = useDispatch()
    const addToCarComponent = () => {
      dispatch(addToCar({modelo, precio, marca, img, año, id}))

    }


      return (
        <div>
             <h2 className={style.marca}> {marca} </h2> 
             <img src={img} alt={modelo} className={style.img} />
             <Link className={style.linkModelo} to={`/phoneDetails/${modelo}`} ><h2> {modelo} </h2> </Link>
             <h2> {precio} </h2> 
             <button className={style.button} name={modelo} onClick={addToCarComponent} >Añadir al carrito</button>
        </div>
      )
}

export default Carousell